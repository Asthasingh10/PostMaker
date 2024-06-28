import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from '../store/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pages = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { isLoggedIn } = useAuth();
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>Loading ...</div>;
    }

async function sendEmail(){
    try {
        console.log({subject,body});
        await fetch("/api/basic-email/route", {
                method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
        body: JSON.stringify({ subject, body })
    });
            setSubject('');
            setBody('');
    } catch (e) {
            console.error(e);
    }
}

    return (
        (isAuthenticated || isLoggedIn) && (
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ background: 'url(your-background-image-url) no-repeat center center fixed', backgroundSize: 'cover' }}>
                <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
                    <div className="card-body">
                        <div className="text-center mb-4">
                            <h2>Welcome {user.name}!</h2>
                            <p>From: {user.email}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Body</label>
                            <textarea className="form-control" id="body" rows="4" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" onClick={sendEmail}>Send Email</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Pages;