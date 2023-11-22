import React from "react";
import a1 from "../Image/2.jpeg";
import pizza from "../Image/pizza.jpeg"
import Biryani from "../Image/Biryani.jpeg"
import berger from "../Image/birger.jpeg"
import chiness from "../Image/chiness.jpeg"
import N_indian from "../Image/North Indian.jpeg";
import { NavLink } from "react-router-dom";
 
 const Category=()=>{
    return(
        <>
        <h4 class="cate_h4">What's on your mind?</h4>
        <div className="cate_p">
            <div className="child"> <NavLink to="/Pizza"><img src={pizza} alt="image"/></NavLink></div>
            <div className="child"> <NavLink to="/Biryani"><img src={Biryani} alt="image"/></NavLink></div>
            <div className="child"> <NavLink to="/berger"><img src={berger} alt="image"/></NavLink></div>
            <div className="child"> <NavLink to="/biryani"><img src={chiness} alt="image"/></NavLink></div>
            <div className="child"> <NavLink to="/north indian"><img src={N_indian} alt="image" /></NavLink></div>
            <div className="child"> <NavLink to="/biryani"><img src={a1} alt="image" /></NavLink></div>
        </div>
        </>
    )
}
export default Category;