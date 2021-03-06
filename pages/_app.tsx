import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>  
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
