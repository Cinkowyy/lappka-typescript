import Other from "components/Other/Other";
import Dashboard from "pages/Panel/Dashboard/Dashboard";
import { Route, Routes } from "react-router";
import "./main.scss";
import Login from "./pages/Login/Login";
import Panel from "./pages/Panel/Panel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<Panel />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="wiadomosci" element={<Other text={"ą wiadomości"} />} />
          <Route path="karty" element={<Other text={"ą karty zwierząt"} />} />
          <Route
            path="wolontariat"
            element={<Other text={"zie wolontariat"} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
