import type { NextPage } from "next";
import SEO from "../components/Seo";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <main>
      <SEO title="Hi" />

      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
