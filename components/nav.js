import Link from 'next/link'
import navStyles from './nav.module.css'
import { useAppcontext } from '../context/AppContext'
import { useEffect, useState } from 'react';

export default function Nav() {
    const { userData } = useAppcontext();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className={navStyles.nav}>
            <h1>beliv</h1>
            <div className={navStyles.userD} onClick={() => setShowMenu(true)}>
                <img src={userData.picture} alt="User Image" width={36} height={36} />
                <span>{userData.given_name}</span>
            </div>
            <div className={navStyles.popUpWrapper} style={{ display: showMenu ? 'block' : 'none' }} onClick={() => setShowMenu(false)}>
                <div className={navStyles.popUp}>
                    <ul>
                        <li><img src="./images/profile_icon.png" /> Profile</li>
                        <li><img src="./images/settings_icon.png" /> Settings</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
