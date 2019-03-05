export class MobileOperator {
  private operatorId: number;
  private operatorName: String;
  private rating: number;

  constructor(operatorId: number, operatorName: String, rating: number) {
    this.operatorId = operatorId;
    this.operatorName = operatorName;
    this.rating = rating;
  }

  public getOperatorId(): number {
    return this.operatorId;
  }

  public setOperatorId(operatorId: number): void {
    this.operatorId = operatorId;
  }

  public getOperatorName(): String {
    return this.operatorName;
  }

  public setOperatorName(operatorName: String): void {
    this.operatorName = operatorName;
  }

  public getRating(): number {
    return this.rating;
  }

  public setRating(rating: number): void {
    this.rating = rating;
  }
}
