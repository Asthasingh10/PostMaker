import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from '../store/auth';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth0();
  console.log("Current User: ", user);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSendEmail = () => {
    navigate('/pages');
  };
  const handleSendTemplate=()=>{
    navigate("/template")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-sticky">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'orange', transform: 'rotate(35deg)' }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {isLoggedIn || isAuthenticated ? (
                <>
                  <button
                    onClick={handleSendEmail}
                    className="btn btn-outline me-2"
                    style={{ color: 'black', backgroundColor: 'orange' }}
                    type="button"
                  >
                    Send Email
                  </button>
                  <button
                    onClick={handleSendTemplate}
                    className="btn btn-outline me-2"
                    style={{ color: 'black', backgroundColor: 'orange' }}
                    type="button"
                  >
                    Template
                  </button>
                  <button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    className="btn btn-outline"
                    style={{ color: 'black', backgroundColor: 'orange' }}
                    type="button"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/signin" className="btn btn-outline me-2" style={{ color: 'orange' }} type="button">
                    SignIn
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-outline" style={{ color: 'black', backgroundColor: 'orange' }} type="button">
                    SignUp
                  </NavLink>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
