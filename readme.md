<div align="center">
<p align="center">
  <!-- <a href="http://nestjs.com/" target="blank"><img src="https://metrists.com/public/logo.svg" width="120" alt="Nest Logo" /></a> -->
   <!-- <a href="http://nestjs.com/" target="blank"><img src="https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" width="120" alt="Nest Logo" /></a> -->
</p>

<h1>Metrists webpack 🦿</h1>

<p> Simple Localization as a Service </p>

</div>

---

[![Downloads Per Month](https://img.shields.io/npm/dm/@metrists/webpack)](https://www.npmjs.com/package/@metrists/webpack) [![Top Language](https://img.shields.io/github/languages/top/metrists/metrists-webpack)](https://github.com/metrists/metrists-webpack/) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![<metrists>](https://circleci.com/gh/metrists/metrists-webpack.svg?style=shield)](https://app.circleci.com/pipelines/github/metrists/metrists-webpack)

## Description

The Metrists webpack is a WebPack plugin that helps you include your localization files in your webpack build.

Metrists webpack is intended to be used with a [Metrists CLI](https://github.com/metrists/metrists-cli), and a internationalization library. We highly recommend that you use [i18next](https://www.i18next.com/) with Metrists.

## Table of Contents

- [Installation](#installation)
- [Creating a .metristsrc file](#creating-a-metristsrc-file)
  - [Differentiating Build Path](#differentiating-build-path-from-development)
- [Webpack Configuration](#webpack-configuration)
- [ No .metristsrc File](#no-metristsrc-file)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [LICENSE](#license)

## Installation

```
npm install @metrists/webpack
```

or using yarn

```
yarn add @metrists/webpack
```

## Creating a .metristsrc file

The best way to configure Metrists on your repository is to create a `.metristsrc` file in the root directory of your project. This way this package, and [Metrists CLI](https://github.com/metrists/metrists-cli) will reference a single source of truth about your localization.

an example `.metristsrc`:

```
{
  "resolvePath": "src/locals",
  "fetcher": "github",
  "envPath": ".env",
  "fetcherParams": {
    "repo": "env.LOCALS_REPO",
    "org": "env.LOCALS_ORG"
  }
}

```

### Differentiating Build Path from Development

By default, Metrists will copy paste the contents of your `resolvePath` argument in your build folder. If you wish to configure a different route inside the build, you can use the **`resolvePathBuild`** parameter, to differentiate your build path:

```
{
  "resolvePath": "src/locals",
  "resolvePathBuild": "locals",
  "fetcher": "github",
  "envPath": ".env",
  "fetcherParams": {
    "repo": "env.LOCALS_REPO",
    "org": "env.LOCALS_ORG"
  }
}

```

## Webpack Configuration

Once installed, you need use `CopyMetristsFiles` inside your webpack configuration, as a plugin:

Webpack config file:

```js
const CopyMetristsFiles = require('@metrists/webpack');
// Webpack config object
return {
  plugins: [CopyMetristsFiles()],
};
```

If you have created and configured your `.metristsrc`, the plugin will read your configuration and move the file to the correct spot inside the build. If you are not using `.metristsrc`, you can [pass your resolvePath directly to the plugin](#no-metristsrc-file).

## No `.metristsrc` File

If you wish to not create a `.metristsrc` configuration file, you can pass a `resolvePath` and optionally a `resolvePathBuild` to the plugin directly:

The output of all fetchers should look like this:

```js
const CopyMetristsFiles = require('@metrists/webpack');
// Webpack config object
return {
  plugins: [
    // plugins here...
    CopyMetristsFiles(
      resolvePath: 'src/locals',
      resolvePathBuild : 'locals'
    )
  ],
};
```

> 🌕 If you do not pass in a `resolvePathBuild` to the plugin, the plugin will use `resolvePath` as the build path too.

## Contributing

This package is a beginner-friendly package. If you don't know where to start, visit [Make a Pull Request](https://makeapullrequest.com/) to learn how to make pull requests.

Please visit [Contributing](CONTRIBUTING.md) for more info.

## Code of Conduct

Please visit [Code of Conduct](CODE_OF_CONDUCT.md).

---

# License

MIT
