import styles from '../styles/Home.module.css';
import draftStyles from '../styles/Draft.module.css';
import {
  withAuthUser,
  AuthAction,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import admin from '../utils/admin';
import { Player } from '../customTypings/dbTypes';

type Props = {
  players: [Player];
};

const Standings: React.FC<Props> = ({ players }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Standings</h1>
        {players.map(({ userId }) => (
          <a className={draftStyles.driverContainer} key={userId}>
            <span>{userId}</span>
          </a>
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
    .child('players')
    .get();
  return { props: { players: snapshot.exists() ? snapshot.val() : 'empty' } };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Standings);
