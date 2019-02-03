# Fast Routes
[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![npm version](https://img.shields.io/badge/npm-1.0.2-blue.svg)](https://www.npmjs.com/package/fast-routes)
[![Coverage Status](https://coveralls.io/repos/github/hasangenc0/fast-routes/badge.svg?branch=master)](https://coveralls.io/github/hasangenc0/fast-routes?branch=master)

Javascript routing for single page applications.

### Installing

```
yarn add fast-routes
```
```
npm install fast-routes
```
## Usage

```js
import {Router} from 'fast-routes';

// create router with parameter root url
const router = new Router('/');

// add some route that have url name and function
router.add('home', 'homePage', () => {
  console.log('home route');
});

// listen for routing
router.listen();
```
```html
<!-- You must add 'fast-route' class for routing -->
<a href='homePage' class='fast-route'> Home </a>
<a href='contactPage' class='fast-route'> Contact </a>
```
Also [see](examples) full express app example that uses fast-routes.

## Built With

* [Typescript](https://www.typescriptlang.org/) - Javascript that scales.

## Authors

* **Hasan Genc** - [linkedIn](https://linkedin.com/in/hasangenc0)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
