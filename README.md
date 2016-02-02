float64-to-float32
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Converts a [double-precision floating-point number][ieee754] to the nearest [single-precision floating-point number][ieee754].


## Installation

``` bash
$ npm install float64-to-float32
```


## Usage

``` javascript
var float64ToFloat32 = require( 'float64-to-float32' );
```

#### float64ToFloat32( x )

Converts a [double-precision floating-point number][ieee754] to the nearest [single-precision floating-point number][ieee754].

``` javascript
var y = float64ToFloat32( 1.337 );
// returns 1.3370000123977661
```


## Notes

*	This `function` may be used as a polyfill for the (poorly named) ES2015 built-in [`Math.fround`][math-fround].


## Examples

``` javascript
var float64ToFloat32 = require( 'float64-to-float32' );

var f64;
var f32;
var i;

// Convert random double-precision floating-point numbers to the nearest single-precision floating-point number...
for ( i = 0; i < 1000; i++ ) {
	f64 = Math.random() * 100;
	f32 = float64ToFloat32( f64 );
	console.log( 'float64: %d => float32: %d', f64, f32 );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/float64-to-float32.svg
[npm-url]: https://npmjs.org/package/float64-to-float32

[build-image]: http://img.shields.io/travis/math-io/float64-to-float32/master.svg
[build-url]: https://travis-ci.org/math-io/float64-to-float32

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/float64-to-float32/master.svg
[coverage-url]: https://codecov.io/github/math-io/float64-to-float32?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/float64-to-float32.svg
[dependencies-url]: https://david-dm.org/math-io/float64-to-float32

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/float64-to-float32.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/float64-to-float32

[github-issues-image]: http://img.shields.io/github/issues/math-io/float64-to-float32.svg
[github-issues-url]: https://github.com/math-io/float64-to-float32/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io
[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985
[math-fround]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround