import React from "react";
import Card from "./Card";
import { Burger_3 } from "./Local_api";

const Berger=(props)=>{
    return(
        <>
        <h3 style={{marginTop:"20px"}}>Burger</h3>
        <div class="main_div">
        {Burger_3.map((val)=>{
        return(
             <Card
                Name={val.Name}
                Tag={val.Tag}
                Price={val.Price}
                imageSrc={val.image} />
        ); })}
        </div>
    </>
    );
}
export default Berger;