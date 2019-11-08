"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollections = /** @class */ (function () {
    function NumbersCollections(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollections.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollections;
}());
exports.NumbersCollections = NumbersCollections;
