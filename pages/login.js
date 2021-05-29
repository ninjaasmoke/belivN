import styles from '../styles/Login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1 className={styles.welcome}>Welcome</h1>
                <p className={styles.desc}>
                    Please login to use <span>beliv</span>.
                </p>
            </div>
        </div>
    )
}
