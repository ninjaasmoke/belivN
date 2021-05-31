import { useAppcontext } from '../context/AppContext'
import styles from '../styles/Profile.module.css'
import { useRouter } from 'next/router'

export default function Profile() {
    const { userData } = useAppcontext();
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <img src="https://source.unsplash.com/800x280/?developer,coding,programmer,audio,music,party" className={styles.bgImg} />
                <div className={styles.profile}>
                    <img className={styles.profileImg} src={userData.picture} />
                    <div className={styles.profileData}>
                        <span className={styles.profileName}>{userData.name}</span> <br />
                        <span className={styles.profileId}>@{userData.id && userData.id}</span> <br />
                        <span className={styles.profileId}>{userData.email && userData.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}