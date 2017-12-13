const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube');

const num1 = 3;
const num1String = "3";

const num2 = 27;

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num1 + ') taking a number argument should return the value Cubed, in this case output should be 27', function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num2);
        });

        it('toCube("' + num1String + '") taking a string argument should return the value Cubed, in this case output should be 27', function() {
            let result = myCube.toCube(num1String);
            assert.equal(result, num2);
        });

        it('toCube should return type number', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });

});