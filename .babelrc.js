'use strict';

// If set, we put Babel in "esmMode", i.e. leave import/export intact.
// Good for webpack and for an esm build.
const esmMode = process.env.BABEL_MODULE_TYPE === "module";
const es6Compat = process.env.BABEL_ES_COMPAT === "6";

module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        // Don't transpile import/export in esmMode.
        modules: esmMode ? false : "auto",
        targets: es6Compat ? "maintained node versions" : undefined
      },
    ],
    "@babel/react",
    "@babel/preset-flow"
  ],
  "plugins": [
    "@babel/plugin-transform-flow-comments",
    "@babel/plugin-proposal-class-properties",
    "transform-inline-environment-variables"
  ],
  "env": {
    "test": {
      "plugins": [
        "espower"
      ]
    }
  }
}
