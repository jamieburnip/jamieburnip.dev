import React from "react";
import EmailLink from "./../../components/EmailLink";
import styles from "./SocialLinks.module.scss";
import config from "../../SiteConfig";

const SocialLinks = () => (
  <section className={styles.section}>
    <div className={styles.email}>
      <EmailLink />
    </div>
    <ul className={styles.list}>
      {config.socialLinks.map(({ label, url }) => (
        <li className={styles.listItem} key={`${label}Link`}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default SocialLinks;
