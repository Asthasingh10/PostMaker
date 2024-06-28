import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
 const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/signin`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };
const {userr, loginWithRedirect } = useAuth0();
console.log("Current User: ",userr)

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-form">
                            <h2 className="main-heading mb-3">SignIn Here !! </h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        onChange={handleInput}
                                        value={user.email}
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        onChange={handleInput}
                                        value={user.password}
                                        name="password"
                                        autoComplete="off"
                                        placeholder="Enter your password"
                                        id="password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-submit">Sign In</button>
                                <button onClick={(e) => loginWithRedirect()} className="btn btn-submit my-3">Log In Google</button>
                           </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Login;
