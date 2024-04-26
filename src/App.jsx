import "./App.css";
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Listing } from "./pages/Listing";
import { SignOn } from "./pages/SignOn";
import { CreateListing } from "./pages/CreateListing";

var account_id = -1; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/login" element={<SignOn />} />
        <Route path="/createListing" element={<CreateListing />} />
      </Routes>
    </Router>
  );
}

export default App;
