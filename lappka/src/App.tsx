import { Navigate, Route, Routes } from "react-router";
import "./main.scss";
import Login from "./pages/Login/Login";
import Panel from "./pages/Panel/Panel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<Navigate to="/panel/dashboard" />} />
        <Route path="/panel/*" element={<Panel />} />
      </Routes>
    </div>
  );
}

export default App;
