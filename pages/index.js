import { getSortedPostsData } from '../lib/posts'

import { parseISO, format } from 'date-fns'

import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href={`/posts/${allPostsData[0].id}`}>
            <a className={styles.card}>
              <h3>{allPostsData[0].title} &rarr;</h3>
              <p><Date dateString={allPostsData[0].date} /></p>
            </a>
          </Link>

          <Link href={`/posts/${allPostsData[1].id}`}>
            <a className={styles.card}>
              <h3>{allPostsData[1].title} &rarr;</h3>
              <p><Date dateString={allPostsData[1].date} /></p>
            </a>
          </Link>

          <Link href={`/posts/${allPostsData[2].id}`}>
            <a className={styles.card}>
              <h3>{allPostsData[2].title} &rarr;</h3>
              <p><Date dateString={allPostsData[2].date} /></p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
