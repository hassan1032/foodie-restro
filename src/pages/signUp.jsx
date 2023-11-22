import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Sign_up=()=>{
        const nav=useNavigate();
         const [input,setInput]=useState({
            Name:"",
            Email:"",
            password:"",
            confirmp:""
        })
        const handleSignUp=(e)=>{
            e.preventDefault();
            localStorage.setItem('user',JSON.stringify(input));
            nav("/login");
        }
        console.log(input);
    return(
        <>
        <div className="login_main_div">
            <div className="log_div">
                <div className="log_title">Sign Up</div>
                <div className="log_form" style={{marginTop:"-71px"}}> 
                    <form onSubmit={handleSignUp}>
                    <div>
                        <input type="text"  placeholder=" " name="Name" 
                        value={input.name} 
                        onChange={(e)=>setInput({
                        ...input,[e.target.name]:e.target.value
                        })}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input type="text" placeholder=" " 
                        name="Email" 
                        value={input.Email}
                        onChange={(e)=>setInput({
                            ...input,[e.target.name]:e.target.value
                        })}/>
                        <label htmlFor="name">Email</label>
                    </div>
                    <div>
                        <input type="password"  placeholder=" "
                        name="password" 
                        value={input.password} onChange={(e)=>setInput({
                            ...input,[e.target.name]:e.target.value
                        })}/>
                        <label htmlFor="name">Password</label>
                    </div>
                    <div>
                        <input type="text"  placeholder=" "
                        name="confirmp" 
                        value={input.confirmp} onChange={(e)=>setInput({
                            ...input,[e.target.name]:e.target.value
                        })}/>
                        <label htmlFor="name">Comfirm</label>
                    </div>
                    <div>
                        <input type="submit" value={"Sign Up"} className="log_btn" />
                    </div>
                        
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}