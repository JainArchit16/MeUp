import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.js";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Howit from "./Components/Howit";
import Upcoming from "./Components/Upcoming"
import {Data} from "./data.js";
import Insert from "./Components/Insert";
import Most from "./Components/Most";
import Contact from "./Components/Contact";
import Subscribe from "./Components/Subscribe";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [AddData,setData] =useState(Data);
  return (
    <>

    
    <div className="bg-slate-800 -z-10">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
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
      <Most></Most>
      <Subscribe></Subscribe>
      <Contact></Contact>
    </>
  );
}

export default App;
