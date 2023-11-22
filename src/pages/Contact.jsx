import React from "react";

const Contact=()=>{
    var ele=document.getElementsByClassName("child");
    for(var i=0;i<ele.length;i++){
        ele[i].onclick=function(){
            var el=ele[0];
            while(el){
                if(el.tagName==="DIV"){
                    el.classList.remove("active_link");
                }
                el=el.nextSibling;
            }
            this.classList.add("active_link");
        }
    }
    return(
        <>
        <div className="contact_div">
            <div className="contact_child">
            <h1>Contact Us</h1>
            <div>
                <form>
                    <div>
                        <input  type="text" placeholder=" " required/>
                        <label>Name</label>
                    </div>
                    <div>
                        <input  type="email" placeholder=" " required/>
                        <label>Email</label>
                    </div>
                    <div>
                        <input className="text_l" placeholder=" " required/>
                        <label >Message</label>
                    </div>
                    <div>
                        <button style={{marginTop:"15px"}}>Send to Message</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </>
    )

}
export default Contact;