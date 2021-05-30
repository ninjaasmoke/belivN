import styles from '../styles/Login.module.css'
import { GoogleLogin } from 'react-google-login';

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1 className={styles.welcome}>Welcome</h1>
                <p className={styles.desc}>
                    Please login to use <span>beliv</span>.
                </p>
                <GoogleLogin
                    clientId="422317457275-32trbdq50ku5hu36qr13b0oa9tb0cs8o.apps.googleusercontent.com"
                    onSuccess={(resp) => { console.log(resp) }}
                    onFailure={(resp) => { console.log(resp) }}
                    cookiePolicy="single_host_origin"
                    isSignedIn={true}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={styles.loginB}>
                            <img src="./images/g_icon.png" alt="Google Icon" className={styles.loginI} /> Log in with Google
                        </button>
                    )}
                />
            </div>
        </div>
    )
}
