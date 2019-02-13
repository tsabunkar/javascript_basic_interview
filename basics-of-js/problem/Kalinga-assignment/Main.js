"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var MobileOperator_1 = require("./MobileOperator");
var Main = /** @class */ (function () {
    function Main() {
        this.person1 = new Person_1.Person(1, "Tejas", 1);
        this.person2 = new Person_1.Person(2, "Usha", 1);
        this.person3 = new Person_1.Person(3, "Shailesh", 2);
        this.person4 = new Person_1.Person(4, "Rani", 2);
        this.person5 = new Person_1.Person(5, "Ash", 2);
        this.person6 = new Person_1.Person(6, "Kat", 1);
        this.persons = [
            this.person1,
            this.person2,
            this.person3,
            this.person4,
            this.person5,
            this.person6
        ];
        this.operator1 = new MobileOperator_1.MobileOperator(1, "Vodafone", 4);
        this.operator2 = new MobileOperator_1.MobileOperator(2, "Airtel", 5);
        this.operator3 = new MobileOperator_1.MobileOperator(3, "Jio", 2);
        this.operators = [
            this.operator1,
            this.operator2,
            this.operator3
        ];
    }
    // *get all the person using particular mobile operator which name which exist
    Main.prototype.getAllPersonsForSearchedMobileOperators = function (operatorToSearch) {
        console.log((this.operators[0] = new MobileOperator_1.MobileOperator(4, "Idea", 2)));
        console.log(this.operators);
        return [];
        /*
        let operatorFound = this.operators.filter((operator: MobileOperator) => {
          return operator.getOperatorName() === operatorToSearch;
        });
    
        return this.persons.filter(
          person => person.getMobileOperator() === operatorFound[0].getOperatorId()
        ); */
    };
    // *Get All persons using top 2 mobile operators based on rating
    Main.prototype.getAllPersonsUsingTopTwoMobileOperator = function () {
        var _this = this;
        // Sort by mobile operators Rating
        var topTwoMobileOperator = this.operators
            .sort(function (a, b) { return (a.getRating() > b.getRating() ? -1 : 1); })
            .splice(0, 2);
        // * Declarative way of coding
        var listOfPersonsUsingTopTwoOperators = [];
        topTwoMobileOperator.forEach(function (mobileOperator) {
            listOfPersonsUsingTopTwoOperators.push(_this.persons.filter(function (person) {
                return person.getMobileOperator() === mobileOperator.getOperatorId();
            }));
        });
        // *Imperative way of coding
        /*  for (const mobileOperator of topTwoMobileOperator) {
          listOfPersonsUsingTopTwoOperators.push(
            this.persons.filter(person => {
              return person.getMobileOperator() === mobileOperator.getOperatorId();
            })
          );
        } */
        return listOfPersonsUsingTopTwoOperators;
    };
    return Main;
}());
exports.Main = Main;
var main = new Main();
console.log(main.getAllPersonsForSearchedMobileOperators("Vodafone"));
console.log("_____________________________________");
console.log(main.getAllPersonsUsingTopTwoMobileOperator());
