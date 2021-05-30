import Link from 'next/link'
import navStyles from './nav.module.css'
import { useAppcontext } from '../context/AppContext'

export default function Nav() {
    const { userData } = useAppcontext();
    return (
        <nav className={navStyles.nav}>
            <h1>beliv</h1>
            <div className={navStyles.userD}>
                <img src={userData.imageUrl} alt="User Image" width={36} height={36} />
                <span>{userData.givenName}</span>
            </div>
        </nav>
    )
}
