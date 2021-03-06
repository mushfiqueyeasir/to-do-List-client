import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const UserAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }
    if (user) {
        return <Navigate to='/' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default UserAuth;