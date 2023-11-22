import React from "react";
import { useState } from "react";

      const Offer_file=()=>{

        const [move, setmove] = useState(76);

        const moveLeft=()=>{
            if(move<76){
            setmove(move+37.5);
            }
        }
        const moveRight=()=>{
            if(move>-69)
            setmove(move-37.5);
        }
        
    return(
        <>
        <div className="offer_div_p">
            <div className="offer_div_c1">
        <h4>Best offers for you</h4>
        <div className="arrow">
            <div onClick={moveLeft}><img width="16" height="16" src="https://img.icons8.com/metro/26/long-arrow-left.png" alt="long-arrow-left"/></div>
            <div onClick={moveRight}><img width="16" height="16" src="https://img.icons8.com/metro/26/long-arrow-right.png" alt="long-arrow-right"/></div>
        </div>
        </div>
        <div className="offer_div_c">
            <div className="move_div" style={{marginLeft:`${move}rem`}}>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/42e8d8218a3884aeb15119633af6ed5b" className="img_fix"/>
            </div>
            <div>  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/318cab799713a9739a56dc9d24659a8e" className="img_fix"/></div>
            <div>  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/31aa5d843272c2c8b2d6338460044630" className="img_fix"/></div>
            <div>  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/42e8d8218a3884aeb15119633af6ed5b" className="img_fix"/></div>
            <div>  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d39bb8484efdb196c4534a3d78b3834c" className="img_fix"/></div>
            <div>  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/df8631eddeb1a9492ae2273a1ca68c68" className="img_fix"/></div>
        </div>
        </div>
        </>
    ); 
}
export default  Offer_file;