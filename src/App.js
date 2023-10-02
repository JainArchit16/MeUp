import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Howit from "./Components/Howit";
import Upcoming from "./Components/Upcoming"
import {Data} from "./data.js";
import Insert from "./Components/Insert";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [AddData,setData] =useState(Data);
  return (
    <div >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />

          <Route path="/Insert" element={<Insert data={AddData} setData={setData}/>} />
      </Routes>
      <Upcoming data={AddData}></Upcoming>
      <Howit></Howit>
    </div>
  );
}

export default App;
