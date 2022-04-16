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
          ? 'dark bg-primary-900 text-white text-opacity-90'
          : 'bg-primary-100 text-primary-800',
        'scroll-smooth font-sans antialiased'
      )}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
