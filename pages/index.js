import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>beliv</title>
        <meta name="description" content="Be live with your friends." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-signin-client_id" content="422317457275-32trbdq50ku5hu36qr13b0oa9tb0cs8o.apps.googleusercontent.com"></meta>
      </Head>

      <Nav />

      <main className={styles.container}>
      </main>

    </div>
  )
}
