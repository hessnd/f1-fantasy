import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = ({ data }): JSX.Element => {
  const dateObj = new Date(`${data.Races[0].date}T${data.Races[0].time}`);
  const raceTime = dateObj.toTimeString();
  const raceDate = dateObj.toDateString();
  return (
    <div className={styles.container}>
      <Head>
        <title>F1 Fantasy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>F1 Fantasy App</h1>
        <h3 className={styles.subtitle}>Next Race</h3>
        <p className={styles.description}>
          Round {data.Races[0].round}
          <br />
          {data.Races[0].raceName}
          <br />
          {raceDate}
          <br />
          {raceTime}
        </p>
        <Link href="/draft">
          <a>draft</a>
        </Link>
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
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://ergast.com/api/f1/2021/next.json');
  const json = await res.json();
  const data = json.MRData.RaceTable;

  return { props: { data } };
};

export default Home;
