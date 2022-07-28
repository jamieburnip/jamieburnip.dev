import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import SEO from "../components/Seo";
import SocialLinks from "../components/SocialLinks";

const Home: NextPage = () => {
  return (
    <main>
      <SEO title="Hi" />

      <Hero />

      <SocialLinks />
    </main>
  );
};

export default Home;
