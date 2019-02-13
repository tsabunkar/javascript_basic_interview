"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(personId, personName, mobileOperator) {
        this.personId = personId;
        this.personName = personName;
        this.mobileOperator = mobileOperator;
    }
    Person.prototype.getPersonId = function () {
        return this.personId;
    };
    Person.prototype.setPersonId = function (personId) {
        this.personId = personId;
    };
    Person.prototype.getPersonName = function () {
        return this.personName;
    };
    Person.prototype.setPersonName = function (personName) {
        this.personName = personName;
    };
    Person.prototype.getMobileOperator = function () {
        return this.mobileOperator;
    };
    Person.prototype.setMobileOperator = function (mobileOperator) {
        this.mobileOperator = mobileOperator;
    };
    return Person;
}());
exports.Person = Person;
