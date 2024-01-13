import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login/login";
import Register from "./auth/Register/register";
import Layout from "./layout/layout";
import About from "./pages/aboutTeams/about";
// import AboutTeamsData from "./pages/aboutTeams/aboutTeamsData";
import LiveScoreData from "./pages/liveScore/liveScoreData";
import UclAbout from "./pages/uclStandings/ucl/uclAbout";
import UclStandings from "./pages/uclStandings/uclGroupA";
import UclGroupB from "./pages/uclStandings/uclGroupB";
import UclGroupC from "./pages/uclStandings/uclGroupC";
import UclGroupD from "./pages/uclStandings/uclGroupD";
import UclGroupE from "./pages/uclStandings/uclGroupE";
import UclGroupF from "./pages/uclStandings/uclGroupF";
import UclGroupG from "./pages/uclStandings/uclGroupG";
import UclGroupH from "./pages/uclStandings/uclGroupH";
import UzbSuperliga from "./pages/uzbSuperliga/UzbSuperliga";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<About />} />
            <Route path="/live" element={<LiveScoreData />} />
            <Route path="/ucl" element={<UclAbout />}>
              <Route index path="/ucl/groupA" element={<UclStandings />} />
              <Route path="/ucl/groupB" element={<UclGroupB />} />
              <Route path="/ucl/groupC" element={<UclGroupC />} />
              <Route path="/ucl/groupD" element={<UclGroupD />} />
              <Route path="/ucl/groupE" element={<UclGroupE />} />
              <Route path="/ucl/groupF" element={<UclGroupF />} />
              <Route path="/ucl/groupG" element={<UclGroupG />} />
              <Route path="/ucl/groupH" element={<UclGroupH />} />
            </Route>
            <Route path="/ucl/groupA" element={<UclStandings />} />

            <Route path="/uzb" element={<UzbSuperliga />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
