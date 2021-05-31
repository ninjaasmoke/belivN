import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { User } from './ContextTypes';
import { getCookie } from '../helper/cookies';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const AppContext = createContext();

export default function AppWrapper({ children }) {
    const [userData, setUserData] = useState(User);
    const firebaseConfig = {
        apiKey: "AIzaSyB6aH60VwZiSpQnnOvCK4t6PhE4weP9xDQ",
        authDomain: "beliv-315217.firebaseapp.com",
        projectId: "beliv-315217",
        storageBucket: "beliv-315217.appspot.com",
        messagingSenderId: "422317457275",
        appId: "1:422317457275:web:bd4b69b6c6cbd543b787de",
        measurementId: "G-SHZ1VK8RRZ"
    }

    const router = useRouter();

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }
        setUserData({
            name: getCookie('name'),
            id: getCookie('id'),
            picture: getCookie('picture'),
            email: getCookie('email'),
            given_name: getCookie('given_name'),
            family_name: getCookie('family_name'),
        })
        const path = window.location.pathname;
        if (getCookie('name').length === 0 && !path.includes('privacy') && !path.includes('terms')) {
            router.replace('/login');
        }
    }, []);
    return (
        <AppContext.Provider value={{
            userData,
            setUserData
        }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppcontext() {
    return useContext(AppContext);
}