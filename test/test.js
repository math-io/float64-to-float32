'use strict';

// MODULES //

var test = require( 'tape' );
var ninf = require( 'const-ninf-float64' );
var pinf = require( 'const-pinf-float64' );
var float64ToFloat32 = require( './../lib' );


// FIXTURES //

var negativeLarge = require( './fixtures/negative_large.json' );
var negativeNormal = require( './fixtures/negative_normal.json' );
var negativeSmall = require( './fixtures/negative_small.json' );
var negativeSubnormal = require( './fixtures/negative_subnormal.json' );
var negativeTiny = require( './fixtures/negative_tiny.json' );
var positiveLarge = require( './fixtures/positive_large.json' );
var positiveNormal = require( './fixtures/positive_normal.json' );
var positiveSmall = require( './fixtures/positive_small.json' );
var positiveSubnormal = require( './fixtures/positive_subnormal.json' );
var positiveTiny = require( './fixtures/positive_tiny.json' );


// NOTES //

/**
* => In many comparisons, we rely on implicit promotion of single-precision floating-point numbers to double-precision equivalents; e.g., +-infinity, NaN. This stems from comparison operators defaulting to float64 operands.
*/


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof float64ToFloat32 === 'function', 'main export is a function' );
	t.end();
});

test( 'if provided `0`, the function returns `0`', function test( t ) {
	var v = float64ToFloat32( 0 );
	t.equal( v, 0, 'equals 0' );
	t.end();
});

test( 'if provided `-0`, the function returns `-0`', function test( t ) {
	var v = float64ToFloat32( -0 );
	t.equal( v, 0, 'equals 0' );
	t.equal( 1/v, ninf, 'returns -0' );
	t.end();
});

test( 'if provided `+infinity`, the function returns `+infinity`', function test( t ) {
	var v = float64ToFloat32( pinf );
	t.equal( v, pinf, 'returns +infinity' );
	t.end();
});

test( 'if provided `-infinity`, the function returns `-infinity`', function test( t ) {
	var v = float64ToFloat32( ninf );
	t.equal( v, ninf, 'returns -infinity' );
	t.end();
});

test( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = float64ToFloat32( NaN );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (+large values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveLarge.x;
	expected = positiveLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (+normal values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveNormal.x;
	expected = positiveNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (+small values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveSmall.x;
	expected = positiveSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (+tiny values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveTiny.x;
	expected = positiveTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (+subnormal values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveSubnormal.x;
	expected = positiveSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (-large values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeLarge.x;
	expected = negativeLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (-normal values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeNormal.x;
	expected = negativeNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (-small values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeSmall.x;
	expected = negativeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (-tiny values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeTiny.x;
	expected = negativeTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

test( 'the function returns the nearest single-precision floating-point number (-subnormal values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeSubnormal.x;
	expected = negativeSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToFloat32( x[ i ] );
		t.equal( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});