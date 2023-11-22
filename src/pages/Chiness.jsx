import React from "react";
import Card from "./Card";
import { Chinees_4 } from "./Local_api";

const Chiness=(props)=>{
    return(
        <>
        <h3 style={{marginTop:"20px"}}>Chiness</h3>
        <div class="main_div">
       {Chinees_4.map((val)=>{
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
export default Chiness;