import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RocketDetails from "./Components/RocketDetails";
import GetPastMissions from "./Components/GetPastMissions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetPastMissions />} />
      <Route path="/:id" element={<RocketDetails />} />
    </Routes>
  );
}

export default App;
