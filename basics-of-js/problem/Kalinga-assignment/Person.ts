export class Person {
  private personId: number;
  private personName: String;
  private mobileOperator: number;

  constructor(personId: number, personName: String, mobileOperator: number) {
    this.personId = personId;
    this.personName = personName;
    this.mobileOperator = mobileOperator;
  }

  public getPersonId(): number {
    return this.personId;
  }

  public setPersonId(personId: number): void {
    this.personId = personId;
  }

  public getPersonName(): String {
    return this.personName;
  }

  public setPersonName(personName: String): void {
    this.personName = personName;
  }

  public getMobileOperator(): number {
    return this.mobileOperator;
  }

  public setMobileOperator(mobileOperator: number): void {
    this.mobileOperator = mobileOperator;
  }
}
