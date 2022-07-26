import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hello I’m
          <br /> <span className={styles.name}>Jamie Burnip</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
