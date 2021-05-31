import styles from '../styles/Login.module.css'
import { useAppcontext } from '../context/AppContext';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setCookie } from '../helper/cookies';
import firebase from 'firebase/app'

export default function Login() {

    const router = useRouter();
    const { userData, setUserData } = useAppcontext();

    const provider = new firebase.auth.GoogleAuthProvider();

    function logInWithGoogle() {
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const userData = res.additionalUserInfo.profile;
                setUserData(userData);
                setCookie('name', userData.name, 7);
                setCookie('id', userData.id, 7);
                setCookie('picture', userData.picture, 7);
                setCookie('email', userData.email, 7);
                setCookie('given_name', userData.given_name, 7);
                setCookie('family_name', userData.family_name, 7);
                router.replace('/');
            }).catch(err => console.error(err));
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
                    By loggin in you are agreeing to our <Link href="/privacy"><a>Privacy Policy</a></Link> and <Link href="/terms"><a>Terms of Service</a></Link>.
                </p>
                <button onClick={() => logInWithGoogle()} className={styles.loginB}>
                    <img src="./images/g_icon.png" alt="Google Icon" className={styles.loginI} /> Log in with Google
                </button>
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
