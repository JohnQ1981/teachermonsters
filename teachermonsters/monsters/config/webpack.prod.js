const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/monsters/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/monsters/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "monsters",
      //   remotes: {
      //     companymanagement: `companymanagement@${domain}/companymanagement/latest/remoteEntry.js`,
      //     testmanagement: `testmanagement@${domain}/testmanagement/latest/remoteEntry.js`,
      //     rolemanagement: `rolemanagement@${domain}/rolemanagement/latest/remoteEntry.js`,
      //     useraccountmanagement: `useraccountmanagement@${domain}/useraccountmanagement/latest/remoteEntry.js`,
      //   },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
