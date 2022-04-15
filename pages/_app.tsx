import clsx from 'clsx';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import { useTheme } from '../utils/useTheme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const darkEnabled = useTheme();

  return (
    <div
      className={clsx(
        darkEnabled
          ? 'dark bg-gradient-to-b from-primary-800 to-[#101010] text-white text-opacity-90'
          : 'bg-gradient-to-b from-primary-100 to-white text-primary-900',
        'scroll-smooth font-sans antialiased'
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
