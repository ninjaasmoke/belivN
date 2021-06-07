import styles from './newRoom.module.css'
import Link from 'next/link'
import { usePeerContext } from '../context/PeerContext';

export default function NewRoom() {
    const { data } = usePeerContext();
    return (
        <>
            {
                data &&
                <Link href={'/room/' + data.roomID}>
                    <div className={styles.newRoom}>
                        Create new room &nbsp;+
                    </div>
                </Link>
            }
        </>
    )
}
