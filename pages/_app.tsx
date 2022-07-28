import "../styles/reboot.scss";
import "../styles/globals.scss";

import "typeface-inter";
import "typeface-roboto";

import type { AppProps } from "next/app";

import Header from "../components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-16x16.png"
          sizes="16x16"
        />
      </Head>

      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
