import React from "react";
import { Outlet,Navigate } from "react-router-dom";

const Protected=()=>{
    const auth=localStorage.getItem("Loggin");
    return auth?<Outlet/>:<Navigate to={"/login"}/>
}
export default Protected;