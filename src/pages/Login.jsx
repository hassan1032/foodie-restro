import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Log_in=()=>{
    const nav=useNavigate();
    const [input,setInput]=useState({
       Email:"",
       password:""
   })
   const handleSignUp=(e)=>{
    e.preventDefault();
    const cheak=JSON.parse(localStorage.getItem("user"));
    if(input.Email==cheak.Email && input.password==cheak.password){
        localStorage.setItem("Loggin",true);
        nav("/");
    }
    else{
        alert("invalid entry");
    }
}
    return(
        <>
        <div className="login_main_div">
            <div className="log_div">
                <div className="log_title">Log In</div>
                <div className="log_form">
                    <form onSubmit={handleSignUp}>
                    <div>
                        <input type="email" placeholder=" " 
                            name="Email"
                            value={input.Email} 
                            onChange={(e)=>setInput({
                            ...input,[e.target.name]:e.target.value
                            })} />
                        <label htmlFor="name">Email</label>
                    </div>
                    <div>

                        <input type="text"  placeholder=" "
                            name="password"
                            value={input.password} 
                            onChange={(e)=>setInput({
                            ...input,[e.target.name]:e.target.value
                            })}/>
                        <label htmlFor="name">Password</label>
                    </div>
                    <div>
                        <input type="submit" value={"Log In"} className="log_btn" />
                    </div>
                        
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}