import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useAuth } from '../store/auth';

const Message = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {isLoggedIn}=useAuth();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    (isAuthenticated | isLoggedIn )&& (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Message;