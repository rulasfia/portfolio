import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/organisms/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-primary-800 font-sans text-white text-opacity-80">
      <Head>
        <title>Khoirul Asfian</title>
        <meta name="description" content="Khoirul Asfian Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
