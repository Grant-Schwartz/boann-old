import { NavBar } from "Components/Nav/NavBar";
import { Home } from "Pages/Home";
import { SignIn } from "Pages/SignIn";
import { Projects } from "Pages/Projects";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-supabase";
import { supabase } from "Utils/Supabase";
import { AuthProvider, useAuth } from "Utils/Auth";
import { SignOut } from "Pages/SignOut";

interface RouteProps {
  children?: JSX.Element;
}

const ProtectedRoute = ({ children }: RouteProps) => {
  const { session } = useAuth()
  if ( !session ) return <Navigate to="/signin" replace/>;
  return (
    <div>
      {children}
    </div>
  );
}

const PreRoute = ({ children }: RouteProps) => {
  const { session } = useAuth()
  if ( session ) return <Navigate to="/projects" replace/>;
  return (
    <div>
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Provider value={supabase}>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
            <Route path="/signin" element={<PreRoute><SignIn /></PreRoute>} />
            <Route path="/signout" element={<ProtectedRoute><SignOut /></ProtectedRoute>} />
            <Route path="/" element={<PreRoute><Home /></PreRoute>} />
          </Routes>
        </AuthProvider>
      </Provider>
    </Router>
  );
}

export default App;
