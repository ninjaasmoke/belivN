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
      </Head>

      <Nav />

      <main className={styles.container}>
      </main>

    </div>
  )
}
