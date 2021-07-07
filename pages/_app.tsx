import 'bootstrap/dist/css/bootstrap.min.css';
import initAuth from '../utils/initAuth';
import Header from '../components/Header';
import type { AppProps } from 'next/app';

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
