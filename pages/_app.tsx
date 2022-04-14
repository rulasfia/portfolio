import clsx from 'clsx';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import { useDarkMode } from '../utils/darkStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { enabled } = useDarkMode();

  return (
    <div
      className={clsx(
        enabled
          ? 'dark bg-primary-800 text-white text-opacity-90'
          : 'bg-primary-100 text-primary-900',
        'font-sans antialiased'
      )}
    >
      <Head>
        <title>Khoirul Asfian</title>
        <meta name="description" content="Khoirul Asfian Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
