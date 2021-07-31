import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matias Dominguez Alonso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to to Next js page</h1>
        <nav className={styles.nav}>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </nav>
      </main>
    </div>
  );
}
