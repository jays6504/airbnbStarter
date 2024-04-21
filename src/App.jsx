import "./App.css";
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Listing } from "./pages/Listing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </Router>
  );
}

export default App;
