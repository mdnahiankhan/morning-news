import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AauthContext } from '../../Pages/News/News/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AauthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner animation='border' variant='primary'></Spinner>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;