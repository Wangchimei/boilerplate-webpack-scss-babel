# Webpack 4 Boilerplate with SASS, Babel, HTML

[![npm version](https://badge.fury.io/js/webpack_scss_babel_boilerplate.svg)](https://badge.fury.io/js/webpack_scss_babel_boilerplate)

A boilerplate to start up your web development faster and easier. :rocket:  
(Webpack 4 + HTML + SASS + Babel + ES6 + Livereload)

## Requirements

[node.js](https://nodejs.org/en) needs to be installed.

## Feature

- Support Livereload
- Support syntax ES2015+
- Support browser cache busting on production mode
- Minify HTML and CSS on production mode
- Two settings for development mode and production mode

## List of Packages and Modules

- Webpack v4.42.0
- Webpack Dev Server v3.10.3
- Babel(Core) v7.8.7
- Babel Loader v8.0.6
- HTML Loader v0.5.5
- CSS Loader v3.4.2
- Sass Loader v8.0.2
- Style Loader v1.1.3
- File Loader v5.1.0
- HTML Webpack Plugin v3.2.0
- Mini CSS Extract Plugin v0.9.0
- Clean Webpack Plugin v3.0.0

## How to start

1. Clone this repo or [Download a zip file](https://github.com/Wangchimei/boilerplate-webpack-scss-babel/archive/master.zip)

   ```
   git clone git@github.com:Wangchimei/boilerplate-webpack-scss-babel.git
   ```

2. (Re)initialize git

   ```
   git init
   ```

3. Install the dependencies

   ```
   npm install
   ```

## Usage

### Start a live reloading server in development

```
npm run serve
```

### Build an application

- For development
  ```
  npm run build:dev
  ```
- For production
  ```
  npm run build
  ```
  or
  ```
  npm run build:prod
  ```

### Remove files

- Remove development files
  ```
  npm run clear:dev
  ```
- Remove production files
  ```
  npm run clear:prod
  ```
- Remove both development and production files
  ```
  npm run clear
  ```
- Remove node_modules, development and production files
  ```
  npm run clear:all
  ```

### Install Bootstrap on the fly

- Only import Bootstrap CSS styles

  ```
  npm run set:bs:css
  ```

  Go to _main.scss_ and import Bootstrap

  ```
  @import '~bootstrap';
  ```

- Bootstrap + jQuery + Popper.js

  ```
  npm run set:bs:all
  ```

  Go to _main.scss_ and import Bootstrap

  ```
  @import '~bootstrap';
  ```

  Go to _vendor.js_ and import Bootstrap

  ```
  import 'bootstrap';
  ```

  **Note:** if you are okay with mixing your own js code with js from vendors, it is fine to put in `index.js`

  By running the commands above, you will install:

  - Bootstrap v4.4.1
  - jquery v3.4.1
  - popper.js v1.16.1

### Uninstall Bootstrap / jQuery / Popper.js

```
npm run bs:clear
```

## License

[MIT](LICENSE)