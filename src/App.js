import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import ConfirmEmail from "./components/ConfirmEmail";
import AppPage from "./components/AppPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/confirmEmail" element={<ConfirmEmail />} />
          <Route path="/campaign" element={<AppPage page="campaign" />} />
          <Route path="/Tables" element={<AppPage page="tables"/>}/>
          <Route path="/Account" element={<AppPage page="account" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
