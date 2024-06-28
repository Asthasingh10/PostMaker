import React, { useState } from 'react';
const Template = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    async function sendEmail(){
    try {
        await fetch("/api/template/route", {
                method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
        body: JSON.stringify({ name, text})
    });
            setName('');
            setText('');
    } catch (e) {
            console.error(e);
    }
}
    return (
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ background: 'url(your-background-image-url) no-repeat center center fixed', backgroundSize: 'cover' }}>
                <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
                    <div className="card-body">
                        <h2 className='text-center mb-4'>Send an Email Template</h2>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Name</label>
                            <input type="text" className="form-control" id="subject" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Body</label>
                            <textarea className="form-control" id="text" rows="4" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" onClick={sendEmail}>Send Email</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Template;