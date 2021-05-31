import Link from 'next/link'
import navStyles from './nav.module.css'
import { useAppcontext } from '../context/AppContext'
import { useState } from 'react';

export default function Nav() {
    const { userData, logoutUser } = useAppcontext();
    const [showMenu, setShowMenu] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    return (
        <nav className={navStyles.nav}>
            <Link href="/"><h1>beliv</h1></Link>
            <div className={navStyles.userD} onClick={() => setShowMenu(true)}>
                <img src={userData.picture} alt="User Image" width={36} height={36} />
                <span>{userData.given_name}</span>
            </div>
            <div className={navStyles.popUpWrapper} style={{ display: showMenu ? 'block' : 'none' }} onClick={() => setShowMenu(false)}>
                <div className={navStyles.popUp}>
                    <ul>
                        <Link href="/profile"><li><img src="./images/profile_icon.png" /> Profile</li></Link>
                        <Link href="/settings"><li><img src="./images/settings_icon.png" /> Settings</li></Link>
                        <li className={navStyles.logout} onClick={() => setShowLogout(true)}><img src="./images/logout_icon.png" /> Logout</li>
                    </ul>
                </div>
            </div>
            <div className={navStyles.popUpWrapper + " " + navStyles.logoutWrapper} style={{ display: showLogout ? 'block' : 'none' }}>
                <div className={navStyles.logoutMenu}>
                    Are you sure you want to log out?
                        <span className={navStyles.cancel} onClick={() => setShowLogout(false)}>✕</span>
                    <div className={navStyles.logoutButtons}>
                        <button className={navStyles.logoutButton} onClick={() => logoutUser()} >Yes</button>
                        <button className={navStyles.cancelButton} onClick={() => setShowLogout(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
