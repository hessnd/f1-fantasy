import { GetServerSideProps } from 'next';
import { useAuthUser } from 'next-firebase-auth';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = ({ nextRace }): JSX.Element => {
  const dateObj = new Date(`${nextRace.date}T${nextRace.time}`);
  const raceTime = dateObj.toTimeString();
  const raceDate = dateObj.toDateString();

  const AuthUser = useAuthUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>F1 Fantasy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className={styles.main}>
        <h1 className={styles.title}>F1 Fantasy App</h1>
        <h3 className={styles.subtitle}>Next Race</h3>
        <p className={styles.description}>
          Round {nextRace.round}
          <br />
          {nextRace.raceName}
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
  const res = await fetch('http://ergast.com/api/f1/current/next.json');
  const json = await res.json();
  const [nextRace] = json.MRData.RaceTable.Races;

  return { props: { nextRace } };
};

export default Home;
