import { useAppcontext } from '../context/AppContext'
import styles from '../styles/Profile.module.css'

export default function Profile() {
    const { userData } = useAppcontext();
    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <img src="https://source.unsplash.com/800x280/?developer,code,programmer,audio" className={styles.bgImg} />
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