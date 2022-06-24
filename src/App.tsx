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
import useAuth, { AuthProvider } from "Utils/Auth";

interface RouteProps {
  children?: JSX.Element;
}

const ProtectedRoute = ({ children }: RouteProps): any => {
  const { user, loading } = useAuth();
  console.log(loading)
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>

      <NavBar />
      <Routes>
        <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
