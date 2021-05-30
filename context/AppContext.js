import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { User } from './ContextTypes';
import { getCookie } from '../helper/cookies';

const AppContext = createContext();

export default function AppWrapper({ children }) {
    const [userData, setUserData] = useState(User);

    const router = useRouter();

    useEffect(() => {
        setUserData({
            name: getCookie('name'),
            googleId: getCookie('googleId'),
            imageUrl: getCookie('imageUrl'),
            email: getCookie('email'),
            givenName: getCookie('givenName'),
            familyName: getCookie('familyName'),
        })
        const path = window.location.pathname;
        if (userData.name === '' && !path.includes('privacy') && !path.includes('terms')) {
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