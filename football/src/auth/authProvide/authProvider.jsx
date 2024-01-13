import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({children}) => {
    const navigate = useNavigate()

    const [token,setToken] = useState(localStorage.getItem('token'))

    useEffect(() =>{
        if( !token || token === null ){
             navigate('/login')
        }
    },[token])

    return (
        <>
            {
             children
            }
        </>
    );
}

export default AuthProvider;

