import React from "react";
import Header2 from "./Header2";
import { Routes,Route } from "react-router-dom";
import { Sign_up } from "../pages/signUp";
import { Log_in } from "../pages/Login";

const login_layout=()=>{
return(
    <>
    <Header2/>
    <Routes>
    <Route path="/login" element={<Log_in/>}/>
    <Route path="/signup" element={<Sign_up/>}/>
    </Routes>
    </>
);
}
export default login_layout;