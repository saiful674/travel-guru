import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebase/firebase_config';


export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const user = 'Saif';

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const info = {
        user,
        createUser,
        loginUser,
    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;