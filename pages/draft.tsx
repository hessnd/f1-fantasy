import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';

const Draft = ({ data }): JSX.Element => {
  const drivers = data.Drivers;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Draft</h1>
        {drivers.map((driver) => (
          <div key={driver.driverId}>
            <p>{driver.driverId}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://ergast.com/api/f1/2021/next.json');
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
