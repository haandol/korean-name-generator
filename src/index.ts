class Namer {
  private firstNames: string[];
  private startCharCode: number;
  private endCharCode: number;

  constructor() {
    this.firstNames = [
      '김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '오', '한',
      '신', '서', '권', '황', '안', '송', '류', '홍', '전', '문', '손', '양'
    ];

    this.startCharCode = '가'.charCodeAt(0);
    this.endCharCode = '힣'.charCodeAt(0);
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private getFirstName(): string {
    let index: number = this.getRandomInt(0, this.firstNames.length);
    return this.firstNames[index];
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
    return this.getFirstName() + this.getMidName() + this.getLastName();
  }
}

export const namer = new Namer;
