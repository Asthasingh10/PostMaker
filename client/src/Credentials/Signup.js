import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import {useNavigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    
    
const navigate=useNavigate();
const {storeTokenInLS}=useAuth();

const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try{
        const response= await fetch(`http://localhost:8080/signup`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(user),
        });
    
        const res_data=await response.json();
        console.log("res from server",res_data.extraDetails);
        
        if(response.ok){
           storeTokenInLS(res_data.token)
            // localStorage.setItem('token',res_data);
            setUser({email:"",password:""})
            navigate("/")
        }else{
            alert(res_data.extraDetails);
        }
    }catch(error){
        console.log("Register",error)
    }
    }

const {userr, loginWithRedirect } = useAuth0();
console.log("Current User: ",userr)

    return (
        <>
        <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">SignUp</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" onChange={handleInput} value={user.email} name="email" autoComplete="off" placeholder="Enter your email"
                                            id="email" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" onChange={handleInput} value={user.password} name="password" autoComplete="off" placeholder="Enter your Password"
                                            id="password" required />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Sign Up</button>
                                    <button onClick={(e) => loginWithRedirect()} className="btn btn-submit my-3">SignUp In Google</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Signup;
