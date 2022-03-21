import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'windi.css';
import Head from 'next/head';
import adobeLoader from '../repositories/adobeLoader';
import { ThemeProvider } from 'next-themes';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, []);
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <title>scoreSheet</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
