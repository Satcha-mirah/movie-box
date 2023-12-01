// _app.js
import Head from 'next/head';
import "../app/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MovieBox</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
