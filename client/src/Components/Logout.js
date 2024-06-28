import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../store/auth';

export const Logout = () => {
    const { LogOutUser } = useAuth();
    useEffect(() => {
        LogOutUser();
    }, [LogOutUser]);
    return <Navigate to="/" />;
};
