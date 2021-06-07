import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

const PeerContext = createContext();

export default function PeerWrapper({ children }) {
    const { data, error } = useSWR('/api/peer/', fetcher);
    useEffect(() => {
        if (error) {
            console.error(error)
        }
    }, [data, error])
    return (
        <PeerContext.Provider value={{
            data, error
        }}>
            {children}
        </PeerContext.Provider>
    )
}

export function usePeerContext() {
    return useContext(PeerContext);
}