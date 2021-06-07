import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'
import { io } from 'socket.io-client';

export default function Room() {
    const { query } = useRouter();
    useEffect(() => {
        const socket = io({ path: '/api/peer' });
        socket.emit('join-room', query.roomID, 10);
    }, [query])
    return (
        <div className={styles.container}>
            <Head>
                <title>beliv</title>
            </Head>
            <main style={{ userSelect: 'text' }}>
                {query && query.roomID}
            </main>
        </div>
    )
}
