module.exports = {

    toCube: function(inp) {
        var cube = NaN,
            num1 = NaN
            // get num1
        if (typeof inp === "number") {
            num1 = inp;
        } else {
            num1 = Number(inp);
        }
        num1 = num1 * num1 * num1;
        return num1;
    }
}