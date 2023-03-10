import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Carburant from "../components/carburant/Carburant";
import AddCuve from "../components/carburant/cuve/AddCuve";
import Cuve from "../components/carburant/cuve/Cuve";
import CuveList from "../components/carburant/cuve/CuveList";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import AddEvenement from "../components/trace/evenement/AddEvenement";
import Evenement from "../components/trace/evenement/Evenement";
import EvenementList from "../components/trace/evenement/EvenementList";
import RemorquageList from "../components/trace/remorquage/RemorquageList";
import Trace from "../components/trace/Trace";
import Home from "../page/Home";

const PrivatedCarbuRoute = ({ isAllowed, redirectPath = "/login" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <div>
      <header>
        <SideBar />
        <NavBar />
      </header>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}

            <Route path="/" element={<Carburant />} />
            <Route path="/cuves" element={<CuveList />} />
            <Route path="/cuves/add" element={<AddCuve />} />
            <Route path="/cuves/:id" element={<Cuve />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
export default PrivatedCarbuRoute;
