import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./Components/Red";
import Blue from "./Components/Blue";
import Home from "./Components/Home";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          {<Link to={"/"}>Home</Link>}
          {<Link to={"/blue"}>Blue</Link>}
          {<Link to={"/red"}>Red</Link>}
        </div>
        <div id="main-section">
          {
            <Routes>
              <Route
                path="/blue"
                element={<Blue/>}
              />
              <Route path="/red" element={<Red/>} />
              <Route path="/" element={<Home/>}></Route>
            </Routes>
          }
        </div>
      </div>
    </>
  );
}

export default App;
