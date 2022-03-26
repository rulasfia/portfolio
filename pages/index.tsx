import Head from 'next/head';
import Header from '../components/organisms/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Khoirul Asfian</title>
        <meta name="description" content="Khoirul Asfian Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}
