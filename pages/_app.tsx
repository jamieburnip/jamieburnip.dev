// import "../styles/reboot.scss";
import "../styles/globals.scss";

import "typeface-inter";
import "typeface-roboto";

import { ThemeProvider, useTheme } from "next-themes";
import type { AppProps } from "next/app";

import Header from "../components/Header";
import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
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
        {/* <Header /> */}

        <ThemeToggle />

        <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
          <div className="max-w-5xl w-11/12 mx-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
