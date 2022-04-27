import "./App.css";
import Campaign from "./components/Campaign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/campaign" element={<Campaign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
