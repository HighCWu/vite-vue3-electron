const Obfuscate = require("webpack-obfuscator");

const obfuscatePlugin = new Obfuscate({
  rotateUnicodeArray: true,
  deadCodeInjection: true,
});

const Copy = require("copy-webpack-plugin");

const copyPlugin = new Copy({
  patterns: [
    {
      from: "dist",
      to: "main",
    },
  ],
});

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  ...(!process.env.IS_DEV ? [obfuscatePlugin, copyPlugin] : []),
];
