import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../firebase.init';
import { getAuth } from 'firebase/auth'
import { Navigate, useLocation } from 'react-router-dom';

const auth = getAuth(app);

const Requireauth = ({ chiddren }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    console.log('user', user);

    if (loading) {
        console.log('loading');
    }
    if (user) {
        return chiddren;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;



};

export default Requireauth;