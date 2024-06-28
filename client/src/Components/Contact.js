import React, { useState } from 'react';
import { useAuth } from '../store/auth';

const defaultContactFormData={
    email:"",
    message:""
}

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);

    const [userData,setUserData]=useState(true);
    const {user}=useAuth();

    if(userData && user){
        setContact({
           email:user.email,
           message:""
        });
        setUserData(false);
    }
    const handleInput = (e) => {
        const name = e.target.name;
        const value=e.target.value;
        setContact({
            ...contact,
            [name]: value
        });
};
    const handleSubmit = async (e) => {
        e.preventDefault();
      try{
        const response=await fetch("http://localhost:8080/form/contact",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(contact),
        });
        if(response.ok){
            setContact(defaultContactFormData);
            const data=await response.json();
            console.log(data);
            alert("Message send successfully")
        }
      }catch(error){
        alert("Message not sent");
        console.log(error);
      }
    };

    return (
        <div className="contact-form my-5">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    name="email"
                    value={contact.email}
                    onChange={handleInput}
                    required/>
                </div>
                <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={contact.message}
                    onChange={handleInput}
                    required
                ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
