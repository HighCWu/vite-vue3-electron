const Obfuscate = require('webpack-obfuscator');

const obfuscatePlugin = new Obfuscate({
  rotateUnicodeArray: true,
  deadCodeInjection: true
});

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './app/index.ts',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  plugins: [
    ...(!process.env.IS_DEV ? [obfuscatePlugin] : [])
  ],
};
