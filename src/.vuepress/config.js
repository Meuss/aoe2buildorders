const { description } = require("../../package");

module.exports = {
  title: "Aoe2 Build orders",
  description: description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    search: false,
    nav: [],
    sidebar: {
      "/": [
        {
          title: "Build orders",
          collapsable: false,
          children: [
            "",
            "fast-castle-boom",
            "fast-castle-unique",
            "khmer-fast-castle",
            "archers",
            "scouts",
            "drush",
            "scouts-archers",
            "mayans",
            "mongols-scout-rush",
            "japanese-maa-flood",
            "persian-douche",
            "aztecs-arena",
            "byzantines-imp-arena",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
