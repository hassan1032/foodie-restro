import React from "react";
import { NavLink } from "react-bootstrap";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export const Menu_siteBar=()=>{
    const [sideMove, setsideMove] = useState(10.5);
    
    const side_move=()=>{
        setsideMove(10.5);
        console.log("working")
    }
    const side_move1=()=>{
        setsideMove(4.4);
        console.log("working1")
    }
    return(
        <>
        <div className="parent">
        <div className="sideBar_p" style={{top:`${sideMove}%`}}>
        <div className="sitebar" >
            <Link to="/Menu/"><div> Pizza</div></Link>
            <Link to="/Menu/biryani"><div> Biryani</div></Link>
            <Link to="/Menu/burger"><div> Burger</div></Link>
            <Link to="/Menu/chiness"><div> Chiness</div></Link>
            <Link to="/Menu/ideli"><div> Ideli</div></Link>
            <Link to="/Menu/north indian"><div>North</div></Link>
        </div>
        <div className="sideBar_btn">
            <img onMouseEnter={side_move} onClick={side_move1} width="35" height="35" src="https://img.icons8.com/material/24/sort-down--v1.png" alt="fries-menu"/>
            </div>
        </div>
        <div className="display">
                    <Outlet/>
        </div>

        </div>

        </>
    );
}