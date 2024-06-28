import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };
    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    const LogOutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

const userAuthentication= async()=>{
        try{
            const response= await fetch(`http://localhost:8080/user`,{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            if(response.ok){ 
                const data= await response.json();
                console.log("User Data",data.userData);
                setUser(data.userData);
            }
        }catch(error){
            console.log("Error fetching user data");
        }
    }
    useEffect(()=>{
        userAuthentication();
    },[]);
    
    return(
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogOutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
