var square = require('./mySquare');
var cube = require('./myCube');

module.exports = {
    toSqre: function(inp) {
        return square.toSquare(inp);

    },

    toCbe: function(inp) {
        return cube.toCube(inp);
    }
}