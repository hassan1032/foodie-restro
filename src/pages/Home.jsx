import Slider from "./slider";
import Category from "./category";
import Offer_file from "./Offer_file";
import Birger_card from "./birger_card";
import { Banne } from "./banner";

let Home=()=>{ 
    return(
        <>
            <Slider/>
            <Category/>
            <Offer_file/>
            <Birger_card/>
            <Banne/>
        </>
    )
}
export default Home;