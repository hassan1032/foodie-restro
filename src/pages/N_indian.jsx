import React from "react";
import Card from "./Card";
import { NorthIndian } from "./Local_api";

const N_indian=(props)=>{
    return(
        <>
        <h3 >north indian</h3>
        <div class="main_div">
       {NorthIndian.map((val)=>{
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
export default N_indian;