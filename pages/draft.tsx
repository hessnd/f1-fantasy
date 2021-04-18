import styles from '../styles/Home.module.css';
import {
  withAuthUser,
  AuthAction,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import admin from '../utils/admin';
import DriverButton from '../components/DriverButton';
import { Driver } from '../customTypings/dbTypes';

type Props = {
  drivers: [Driver];
};

const Draft: React.FC<Props> = ({ drivers }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Draft</h1>
        {drivers.map((driver) => (
          <DriverButton key={driver.driverId} driver={driver} />
        ))}
      </main>
    </div>
  );
};
export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async () => {
  const dbRef = admin.database().ref();
  const snapshot = await dbRef
    .child('seasons')
    .child('2021')
    .child('drivers')
    .get();
  return { props: { drivers: snapshot.exists() ? snapshot.val() : 'empty' } };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Draft);
