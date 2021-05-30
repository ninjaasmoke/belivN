import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { User } from './ContextTypes';

const AppContext = createContext();

export default function AppWrapper({ children }) {
    const [userData, setUserData] = useState(User);

    const router = useRouter();

    useEffect(() => {
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