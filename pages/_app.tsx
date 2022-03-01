import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from 'react';
import 'windi.css';
import 'animate.css';
import 'pattern.css';
import Head from 'next/head';
import adobeLoader from "../libs/adobeLoader"

useEffect(() => {
  if (process.browser) adobeLoader(document);
}, [])

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
