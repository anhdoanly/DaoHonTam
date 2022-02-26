import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://daohontam.com">DaoHonTam.com!</a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <Link href="/tour-hon-tam-nha-trang" className={styles.card}>
            <h2>Tour Hòn Tằm &rarr;</h2>
            <p>Tour Đảo Hòn Tằm Nha Trang được tổ chức hàng ngày theo hình thức ghép đoàn, là tour Vip cao cấp di chuyển bằng cano cao tốc.</p>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Vé Hòn Tằm &rarr;</h2>
            <p>Dịch vụ tắm bùn khoáng tại KDL Đảo Hòn Tằm đang là địa điểm mới nổi, hấp dẫn, mới lạ của du lịch Nha Trang.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Tắm bùn Hòn Tằm &rarr;</h2>
            <p>Dịch vụ tắm bùn khoáng tại KDL Đảo Hòn Tằm đang là địa điểm mới nổi, hấp dẫn, mới lạ của du lịch Nha Trang.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Resort Hòn Tằm &rarr;</h2>
            <p>
            Dịch vụ tắm bùn khoáng tại KDL Đảo Hòn Tằm đang là địa điểm mới nổi, hấp dẫn, mới lạ của du lịch Nha Trang.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
