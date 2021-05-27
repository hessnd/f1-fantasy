import {
  withAuthUser,
  AuthAction,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import admin from '../utils/admin';
import { Player } from '../customTypings/dbTypes';
import { Container } from 'react-bootstrap';

type Props = {
  players: [Player];
};

const Standings: React.FC<Props> = ({ players }) => {
  return (
    <Container>
      <main>
        <h1>Standings</h1>
        {players.map(({ userId }) => (
          <a key={userId}>
            <span>{userId}</span>
          </a>
        ))}
      </main>
    </Container>
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
