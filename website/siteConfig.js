// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Михаил Потачев",
  tagline: "Стихи",

  url: "https://potachev.ru",
  baseUrl: "/",

  headerLinks: [{ doc: "lermontov", label: "Поэты русские" }],

  favicon: "img/favicon.ico",

  colors: {
    primaryColor: "#5DADE2",
    secondaryColor: "#85C1E9",
  },

  copyright: `Copyright © ${new Date().getFullYear()} Михаил Потачев`,

  onPageNav: "separate",
  cleanUrl: false,

  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",
};

module.exports = siteConfig;
