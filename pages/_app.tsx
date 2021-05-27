import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import initAuth from '../utils/initAuth';
import Header from '../components/Header';

initAuth();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
