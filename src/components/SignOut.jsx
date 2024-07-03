import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const SignOut = () => {
    const { signOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        signOut();
        navigate('/');
    }, [signOut, navigate]);

    return null;
};

export default SignOut;
