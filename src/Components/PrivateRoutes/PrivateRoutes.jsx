import React, {  useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    if(loading){
        return 
    }

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;