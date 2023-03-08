const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  //...
  resolve: {
    fallback: {
      abc: false, // do not include a polyfill for abc
      xyz: path.resolve(__dirname, "path/to/file.js"),
      os: require.resolve("os-browserify/browser"), // include a polyfill for xyz
    },
  },
  plugins: [new NodePolyfillPlugin()],
};
