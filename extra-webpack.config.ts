import { Configuration, DefinePlugin } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { version } from '@project';

/**
 * WORKING
 */
// With ng 12: UMD bundles are produced => working fine
// Uncomment the following two lines to test it

// import { SomeClass } from 'dummy-lib-angular-twelve';
// const someClass = new SomeClass();

/**
 * NOT WORKING
 */
// With ng 13: UMD bundles are no longer produced, ES2020 output is produced
// Uncomment the following two lines to get the error: An unhandled exception occurred: Unknown file extension ".ts"

import { SomeClass } from 'dummy-lib-angular-thirteen';
const someClass = new SomeClass();

export default {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'footer.html',
      template: 'src/footer-template.html',
    }),
    new DefinePlugin({
      APP_VERSION: JSON.stringify(version),
    }),
  ],
} as Configuration;
