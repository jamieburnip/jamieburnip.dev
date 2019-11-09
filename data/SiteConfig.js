const config = {
  siteTitle: "MadeByJamie.dev", // Site title.
  siteTitleShort: "MBJ.DEV", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Made by Jamie", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://madebyjamie.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Web development articles and tutorials made by me, Jamie.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-48020081-5", // GA tracking ID.
  postDefaultCategoryID: "Developement", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Jamie", // Username to display in the author segment.
  userEmail: "jamieburnip@gmail.com", // Email used for RSS feed's author segment
  userGithub: "jamieburnip",
  userTwitter: "jamieburnip", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Newcastle-upon-Tyne, UK", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/articles/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/jamieburnip",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jamieburnip",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: this.userEmail,
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: `Copyright © ${new Date().getFullYear()}. Jamie`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#ff1493", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
