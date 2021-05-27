import {
  withAuthUser,
  AuthAction,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import admin from '../utils/admin';
import DriverButton from '../components/DriverButton';
import { Driver } from '../customTypings/dbTypes';
import { Container, Row } from 'react-bootstrap';

type Props = {
  drivers: [Driver];
};

const Draft: React.FC<Props> = ({ drivers }) => {
  return (
    <Container>
      <h1 className="fs-1 fw-bold mb-4">Draft</h1>
      {drivers.map((driver) => (
        <Row key={driver.driverId} className="justify-content-center">
          <DriverButton driver={driver} />
        </Row>
      ))}
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
    .child('drivers')
    .get();
  return { props: { drivers: snapshot.exists() ? snapshot.val() : 'empty' } };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Draft);
