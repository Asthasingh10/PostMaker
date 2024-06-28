import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div className="content">
        <h1>Send Email Directly</h1>
        <h1>From Your Code</h1>
        <p> No server code needed.Focus on thing that matters.</p>
        <NavLink to="/signup" className="btn btn-outline" style={{ color: 'black', backgroundColor: 'orange' }} type="button">
               Create New Account
        </NavLink>
    </div>
    </>
  )
}
