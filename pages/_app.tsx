import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'windi.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>scoreSheet</title>
      </Head> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
