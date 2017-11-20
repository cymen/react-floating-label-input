/* eslint-disable */

import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';

import pkg from './package.json';

const cssExportMap = {};

const commonPlugins = [
  sass({
    output: pkg.style,
  }),
  babel(babelrc({ addModuleOptions: false })),
];

const external = ['react', 'react-dom'];

export default [
  {
    // browser-friendly UMD build
    input: 'src/main.js',
    external: external,
    output: {
      file: pkg.browser,
      format: 'umd',
    },
    globals: {
      react: 'React',
    },
    name: 'FloatingLabelInput',
    plugins: [
      ...commonPlugins,
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `file` and `format`)
  {
    input: 'src/main.js',
    external: external,
    plugins: commonPlugins,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
  },
];
