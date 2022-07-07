import "./App.css";
import Campaign from "./components/Campaign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import ConfirmEmail from "./components/ConfirmEmail";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/confirmEmail" element={<ConfirmEmail />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
