import React from "react";
import Card from "./Card";
import { Briyani_1 } from "./Local_api";

const Biryani=(props)=>{
    return(
        <>
        <h3 style={{marginTop:"20px"}}>Biryani</h3>
        <div class="main_div">
       {Briyani_1.map((val)=>{
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
export default Biryani;