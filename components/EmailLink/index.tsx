import React from "react";
import config from "../../SiteConfig";
import styles from "./EmailLink.module.scss";

const EmailLink = () => (
  <a className={styles.link} href={`mailto:${config.siteEmail}`}>
    Let’s Talk
  </a>
);

export default EmailLink;
