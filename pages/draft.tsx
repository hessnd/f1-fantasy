import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';
import draftStyles from '../styles/Draft.module.css';

const Draft = ({ data }): JSX.Element => {
  const drivers = data.Drivers;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Draft</h1>
        {drivers.map(({ driverId }) => (
          <a className={draftStyles.driverContainer} key={driverId}>
            <span>{driverId}</span>
          </a>
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://ergast.com/api/f1/current/next.json');
  const json = await res.json();
  const race = json.MRData.RaceTable.Races[0];
  const { round } = race;

  const driversRes = await fetch(
    `https://ergast.com/api/f1/current/${round}/drivers.json`
  );
  const driversJson = await driversRes.json();
  const driversData = driversJson.MRData.DriverTable;

  return { props: { data: driversData } };
};

export default Draft;
