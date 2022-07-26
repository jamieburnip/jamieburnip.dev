const config = {
  siteTitle: `I'm Jamie Burnip`,
  siteTitleShort: `I'm Jamie Burnip`,
  siteTitleAlt:
    "Hello I’m Jamie Burnip and I’m a software developer from Newcastle-upon-tyne. I’m also the creator of the Heart Coding website and Youtube Channel.", // Alternative site title for SEO.
  siteLogo: "/logos/logo-512.png", // Logo used for SEO and manifest.
  siteUrl: "https://jamieburnip.dev", // Domain of your website without pathPrefix.
  siteEmail: "me@jamieburnip.dev",
  siteDescription: `Hi, Hello! I'm Jamie Burnip. I’m a software developer from Newcastle-upon-tyne.`,

  socialLinks: [
    {
      name: "twitter",
      label: "TW.",
      url: "https://twitter.com/jamieburnip",
    },
    {
      name: "linkedin",
      label: "IN.",
      url: "https://www.linkedin.com/in/jamieburnip",
    },
    {
      name: "github",
      label: "GH.",
      url: "https://github.com/jamieburnip",
    },
  ],

  copyright: `© ${new Date().getFullYear()}, jamieburnip.dev`,
  themeColor: "#FB3A94", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff", // Used for setting manifest background color.
};

export default config;
