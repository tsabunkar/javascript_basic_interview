import { Person } from "./Person";
import { MobileOperator } from "./MobileOperator";

export class Main {
  person1: Person = new Person(1, "Tejas", 1);
  person2: Person = new Person(2, "Usha", 1);
  person3: Person = new Person(3, "Shailesh", 2);
  person4: Person = new Person(4, "Rani", 2);
  person5: Person = new Person(5, "Ash", 2);
  person6: Person = new Person(6, "Kat", 1);

  persons: Person[] = [
    this.person1,
    this.person2,
    this.person3,
    this.person4,
    this.person5,
    this.person6
  ];

  operator1: MobileOperator = new MobileOperator(1, "Vodafone", 4);
  operator2: MobileOperator = new MobileOperator(2, "Airtel", 5);
  operator3: MobileOperator = new MobileOperator(3, "Jio", 2);

  operators: MobileOperator[] = [
    this.operator1,
    this.operator2,
    this.operator3
  ];

  // *get all the person using particular mobile operator which name which exist

  public getAllPersonsForSearchedMobileOperators(
    operatorToSearch: String
  ): Person[] {
    let operatorFound = this.operators.filter((operator: MobileOperator) => {
      return operator.getOperatorName() === operatorToSearch;
    });

    return this.persons.filter(
      person => person.getMobileOperator() === operatorFound[0].getOperatorId()
    );
  }

  // *Get All persons using top 2 mobile operators based on rating
  public getAllPersonsUsingTopTwoMobileOperator(): Person[] {
    // Sort by mobile operators Rating
    let topTwoMobileOperator = this.operators
      .sort((a, b) => (a.getRating() > b.getRating() ? -1 : 1))
      .splice(0, 2);

    // * Declarative way of coding
    let listOfPersonsUsingTopTwoOperators = [];
    topTwoMobileOperator.forEach(mobileOperator => {
      listOfPersonsUsingTopTwoOperators.push(
        this.persons.filter(
          person =>
            person.getMobileOperator() === mobileOperator.getOperatorId()
        )
      );
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
  }
}

let main = new Main();
console.log(main.getAllPersonsForSearchedMobileOperators("Vodafone"));
console.log("_____________________________________");
console.log(main.getAllPersonsUsingTopTwoMobileOperator());
