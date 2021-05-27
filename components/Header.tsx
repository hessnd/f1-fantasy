import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';

const Header: React.FC = (): JSX.Element => {
  const { email, signOut } = useAuthUser();

  return (
    <Navbar>
      <Head>
        <title>F1 Fantasy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>F1 Fantasy Draft</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {email ? (
              <>
                <p>Signed in as {email}</p>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <p>You are not signed in.</p>
                <Link href="/auth">
                  <a>
                    <Button type="button" variant="secondary" size="sm">
                      Sign in
                    </Button>
                  </a>
                </Link>
              </>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withAuthUser()(Header);
