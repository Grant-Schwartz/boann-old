import { NavBar } from "Components/Nav/NavBar";
import { Home } from "Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/projects" />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
