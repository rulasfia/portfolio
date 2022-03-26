import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans bg-primary-800 text-white text-opacity-80 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
