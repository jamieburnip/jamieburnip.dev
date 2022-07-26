import React from "react";
import Link from "next/link";

import EmailLink from "./../../components/EmailLink";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <Link href="/" passHref>
          <a className={styles.title}>Jamie Burnip</a>
        </Link>
        <EmailLink />
      </div>
    </header>
  );
};

export default Header;
