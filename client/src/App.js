import React from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Login from './Credentials/Login';
import Signup from './Credentials/Signup';
import { Logout } from './Components/Logout';
import './App.css';
import Home from './Components/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from './store/auth';
import Pages from './basic-email/Pages';
import Template from './templates/Pages';


const App = () => {
    return (
        <div className="ct">
            <BrowserRouter>
                <AuthProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signin" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<Error />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path='/pages' element={<Pages/>}/>
                        <Route path='/template' element={<Template/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>

    );
};

export default App;
