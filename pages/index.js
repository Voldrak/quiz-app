import Head from 'next/head'
import Start from '../components/StartPage/start'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Quiz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Start />
      </main>

     
    </div>
  )
}
