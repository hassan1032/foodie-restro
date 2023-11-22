import React from "react";
import Card from "./Card";
import { Idli_5 } from "./Local_api";

const Ideli=(props)=>{
    return(
        <>
        <h3 style={{marginTop:"20px"}}>Ideli</h3>
        <div class="main_div">
       {Idli_5.map((val)=>{
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
export default Ideli;