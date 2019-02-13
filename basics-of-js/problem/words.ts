export class Words {
  sumUp(words: string[]): string {
    return String([...words]);
    // let mywords: string[] = [...words];
    // return String(mywords);
  }
}

let words = new Words();
console.log(words.sumUp(["India", "is", "great"]));
