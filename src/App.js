import "./styles.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Home />
        </div>
      </div>
    </Router>
  );
}
