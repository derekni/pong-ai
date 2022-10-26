import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pong AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Game</h1>
      </main>

      <footer className={styles.footer}>
        Created with ❤️ by Derek Ni and Chris Yuan
      </footer>
    </div>
  );
}
