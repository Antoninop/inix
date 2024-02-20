import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import JoinGame from "./Pages/JoinGame/JoinGame";
import CreateGame from "./Pages/CreateGame/CreateGame";
import Game from "./Pages/Game/Game";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinGame />} />
          <Route path="/Creategame/:gameId" element={<CreateGame />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
