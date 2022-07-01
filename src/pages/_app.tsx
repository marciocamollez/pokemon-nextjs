import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../components/Footer/Footer.styled';
import '../components/Header/Header.styled';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
