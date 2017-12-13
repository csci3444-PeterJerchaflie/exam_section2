const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare');

const num1 = 3;
const num1String = "3";

const num2 = 9;

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num1 + ') taking a number argument should return the value squared, in this case output should be 9', function() {
            let result = mySquare.toSquare(num1);
            assert.equal(result, num2);
        });

        it('toSquare("' + num1String + '") taking a string argument should return the value squared, in this case output should be 9', function() {
            let result = mySquare.toSquare(num1String);
            assert.equal(result, num2);
        });

        it('toSquare should return type number', function() {
            let result = mySquare.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });

});