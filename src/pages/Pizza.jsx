import React from "react";
import Card from "./Card";
import { Pizza_1 } from "./Local_api";

const Pizza=(props)=>{
    return(
        <>
        <h3 style={{marginTop:"20px"}}>Pizza</h3>
        <div class="main_div">
       {Pizza_1.map((val)=>{
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
export default Pizza;