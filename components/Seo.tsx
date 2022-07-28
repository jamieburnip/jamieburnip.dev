import React from "react";
import Head from "next/head";
import urljoin from "url-join";
import config from "../SiteConfig";

interface Props {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: Props) {
  const defaultTitle = config.siteTitle;

  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const metaDescription = description || config.siteDescription;

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: config.siteUrl,
      name: defaultTitle,
    },
    {
      "@context": "https://schema.org/",
      "@type": "Person",
      name: "Jamie Burnip",
      url: config.siteUrl,
      image: urljoin(config.siteUrl, `/images/me.jpg`),
      sameAs: config.socialLinks.map(({ url }) => url),
    },
  ];

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />

      <script type="application/ld+json" key="ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Head>
  );
}
