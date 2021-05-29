import Link from 'next/link'
import navStyles from './nav.module.css'

export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <h1>beliv</h1>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
            </ul>
        </nav>
    )
}
