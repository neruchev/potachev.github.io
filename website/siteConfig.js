// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Михаил Потачев",
  tagline: "Стихи",

  projectName: "potachev.ru",
  organizationName: "potachev",

  url: "https://potachev.ru",
  baseUrl: "/",
  docsUrl: "poems",
  customDocsPath: "poems",

  headerLinks: [{ doc: "poety-russkie", label: "Поэты русские" }],

  favicon: "img/favicon.ico",

  colors: {
    primaryColor: "#5DADE2",
    secondaryColor: "#85C1E9",
  },

  copyright: `Copyright © ${new Date().getFullYear()} Михаил Потачев`,

  onPageNav: "separate",
  cleanUrl: false,
};

module.exports = siteConfig;
