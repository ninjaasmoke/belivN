import styles from '../styles/Login.module.css'
import { GoogleLogin } from 'react-google-login';
import { useAppcontext } from '../context/AppContext';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {

    const router = useRouter();
    const { userData, setUserData } = useAppcontext();

    function signInSuccess(response) {
        setUserData(response.profileObj);
        router.replace('/')
    }

    function signInFailue(response) {
        console.log(response);
        alert('Login failed!');
    }

    useEffect(() => {
        if (userData.name !== '') {
            router.replace('/');
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1 className={styles.welcome}>Welcome</h1>
                <p className={styles.desc}>
                    Please login to use <span>beliv</span>. <br /> <br />
                    By loggin in you are agreeing to our <Link href="privacy"><a>Privacy Policy</a></Link> and <Link href="terms"><a>Terms of Service</a></Link>.
                </p>
                <GoogleLogin
                    clientId="422317457275-32trbdq50ku5hu36qr13b0oa9tb0cs8o.apps.googleusercontent.com"
                    onSuccess={signInSuccess}
                    onFailure={signInFailue}
                    cookiePolicy="single_host_origin"
                    // isSignedIn={true}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={styles.loginB}>
                            <img src="./images/g_icon.png" alt="Google Icon" className={styles.loginI} /> Log in with Google
                        </button>
                    )}
                />
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerL}>beliv</div>
                <div className={styles.footerM} />
                <a href="https://github.com/ninjaasmoke/beliv" target="_blank" rel="noopener">
                    <img src="./images/gh_icon.png" alt="GitHub Icon" className={styles.footerGH} />
                </a>
            </footer>
        </div>
    )
}
