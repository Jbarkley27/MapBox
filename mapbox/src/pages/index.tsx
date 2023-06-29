import LandingPage from '@/components/LandingPage/LandingPage';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MAPBOX</title>
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  );
}
