/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
// import urljoin from "url-join";

import config from "../SiteConfig";

interface Props {
  title: String;
  description?: String;
  lang?: String;
  meta?: [];
}

export default function SEO({
  title,
  description,
  lang = "en",
  meta = [],
}: Props) {
  const site = {
    siteMetadata: {
      title: "",
      description: "",
      author: "",
      siteUrl: "",
    },
  };

  const metaDescription = description || site.siteMetadata.description;

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: site.siteMetadata.siteUrl,
      name: site.siteMetadata.title,
    },
    {
      "@context": "https://schema.org/",
      "@type": "Person",
      name: "Jamie Burnip",
      url: site.siteMetadata.siteUrl,
      // image: urljoin(site.siteMetadata.siteUrl, `/images/me.jpg`),
      sameAs: config.socialLinks.map(({ url }) => url),
    },
  ];

  return (
    <Head>
      <title>Hi</title>
      {/* <meta charset="utf-8"> */}
      {/* <meta http-equiv="x-ua-compatible" content="ie=edge"> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> */}
      {/* <meta name="description" content="Hi, Hello! I'm Jamie Burnip. I’m a software developer from Newcastle-upon-tyne." data-react-helmet="true"> */}
      {/* <meta property="og:title" content="Hi" data-react-helmet="true"> */}
      {/* <meta property="og:description" content="Hi, Hello! I'm Jamie Burnip. I’m a software developer from Newcastle-upon-tyne." data-react-helmet="true"> */}
      {/* <meta property="og:type" content="website" data-react-helmet="true"> */}
      {/* <meta name="twitter:card" content="summary" data-react-helmet="true"> */}
      {/* <meta name="twitter:creator" content="@jamieburnip" data-react-helmet="true"> */}
      {/* <meta name="twitter:title" content="Hi" data-react-helmet="true"> */}
      {/* <meta name="twitter:description" content="Hi, Hello! I'm Jamie Burnip. I’m a software developer from Newcastle-upon-tyne." data-react-helmet="true"> */}

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Head>
  );
}

// <Helmet
//   htmlAttributes={{
//     lang,
//   }}
//   title={title}
//   titleTemplate={`%s | ${site.siteMetadata.title}`}
//   meta={[
//     {
//       name: `description`,
//       content: metaDescription,
//     },
//     {
//       property: `og:title`,
//       content: title,
//     },
//     {
//       property: `og:description`,
//       content: metaDescription,
//     },
//     {
//       property: `og:type`,
//       content: `website`,
//     },
//     {
//       name: `twitter:card`,
//       content: `summary`,
//     },
//     {
//       name: `twitter:creator`,
//       content: site.siteMetadata.author,
//     },
//     {
//       name: `twitter:title`,
//       content: title,
//     },
//     {
//       name: `twitter:description`,
//       content: metaDescription,
//     },
//   ].concat(meta)}
// >
//   <script type="application/ld+json">
//     {JSON.stringify(schemaOrgJSONLD)}
//   </script>
// </Helmet>
