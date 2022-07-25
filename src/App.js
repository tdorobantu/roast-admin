import "./App.css";
import Campaign from "./components/Campaign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import ConfirmEmail from "./components/ConfirmEmail";
import ResetPassword from "./components/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";

// * Test User
// * email: tdorobantu95@gmail.com
// * pass: Parola12345!

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Start />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/confirmEmail" element={<ConfirmEmail />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
