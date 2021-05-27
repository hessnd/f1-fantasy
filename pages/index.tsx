import { GetServerSideProps } from 'next';
import { withAuthUser } from 'next-firebase-auth';
import Link from 'next/link';
import { Container, Button } from 'react-bootstrap';
import { Race } from '../customTypings/dbTypes';

const Home: React.FC<{ nextRace: Race }> = ({ nextRace }): JSX.Element => {
  const dateObj = new Date(`${nextRace.date}T${nextRace.time}`);
  const raceTime = dateObj.toTimeString();
  const raceDate = dateObj.toDateString();

  return (
    <Container>
      <main>
        <h1>F1 Fantasy App</h1>
        <h3>Next Race</h3>
        <p className="text-center">
          Round {nextRace.round}
          <br />
          {nextRace.raceName}
          <br />
          {raceDate}
          <br />
          {raceTime}
        </p>
        <Link href="/draft" passHref>
          <Button variant="outline-primary">draft</Button>
        </Link>
        <Link href="/standings" passHref>
          <Button variant="outline-primary">standings</Button>
        </Link>
      </main>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://ergast.com/api/f1/current/next.json');
  const json = await res.json();
  const [nextRace] = json.MRData.RaceTable.Races;

  return { props: { nextRace } };
};

export default withAuthUser()(Home);
