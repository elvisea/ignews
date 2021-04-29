import styles from '../styles/home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>INICIO | IG.NEWS</title>
      </Head>
      <h1 className={styles.title}>
        Ola
      </h1>
    </>
  )
}
