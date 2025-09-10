import React from "react";
import Scenario from "./Components/scenario";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {

  
     return <h1>Home page</h1>
  
}

const App = () => {
  return (
    <>
      <nav>
        <Link to="/"></Link> 
         <Link to="state">State</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="state" element={<Scenario />} />
      </Routes>
    </>
  );
};

export default App;
