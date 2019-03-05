"use strict";
exports.__esModule = true;
var Words = /** @class */ (function () {
    function Words() {
    }
    Words.prototype.sumUp = function (words) {
        // return String([...words]);
        var mywords = words.slice();
        return String(mywords);
    };
    return Words;
}());
exports.Words = Words;
var words = new Words();
console.log(words.sumUp(["India", "is", "great"]));
