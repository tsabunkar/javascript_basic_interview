"use strict";
exports.__esModule = true;
var MobileOperator = /** @class */ (function () {
    function MobileOperator(operatorId, operatorName, rating) {
        this.operatorId = operatorId;
        this.operatorName = operatorName;
        this.rating = rating;
    }
    MobileOperator.prototype.getOperatorId = function () {
        return this.operatorId;
    };
    MobileOperator.prototype.setOperatorId = function (operatorId) {
        this.operatorId = operatorId;
    };
    MobileOperator.prototype.getOperatorName = function () {
        return this.operatorName;
    };
    MobileOperator.prototype.setOperatorName = function (operatorName) {
        this.operatorName = operatorName;
    };
    MobileOperator.prototype.getRating = function () {
        return this.rating;
    };
    MobileOperator.prototype.setRating = function (rating) {
        this.rating = rating;
    };
    return MobileOperator;
}());
exports.MobileOperator = MobileOperator;