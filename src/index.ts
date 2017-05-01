export default class Namer {
  private firstNames: number[];
  private startCharCode: number;
  private endCharCode: number;

  constructor() {
    this.firstNames = [
      44608, 51060, 48149, 52572, 51221, 44053, 51312, 50980, 51109, 51076,
      50724, 54620, 49888, 49436, 44428, 54889, 50504, 49569, 47448, 54861,
      51204, 47928, 49552, 50577
    ];

    this.startCharCode = 44032;
    this.endCharCode = 55203;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private getFirstName(): string {
    let index: number = this.getRandomInt(0, this.firstNames.length);
    return String.fromCharCode(this.firstNames[index]);
  }

  private getMidName(): string {
    let charCode: number = this.getRandomInt(this.startCharCode, this.endCharCode);
    return String.fromCharCode(charCode);
  }

  private getLastName(): string {
    let charCode: number = this.getRandomInt(this.startCharCode, this.endCharCode);
    return String.fromCharCode(charCode);
  }

  public generate(): string {
    let unicodeName: string = this.getFirstName() + this.getMidName() + this.getLastName();
    return unicodeName;
  }
}

window.namer = new Namer();
