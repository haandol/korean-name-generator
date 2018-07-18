import * as _ from 'lodash';

export default class Namer {
  private firstNames: number[];
  private firstCount: number;
  private acceptableJong: number[];
  private acceptableJung: number[];
  private acceptableCho: number[];

  constructor() {
    this.firstNames = [
      44608, 51060, 48149, 52572, 51221, 44053, 51312, 50980, 51109, 51076,
      50724, 54620, 49888, 49436, 44428, 54889, 50504, 49569, 47448, 54861,
      51204, 47928, 49552, 50577
    ];
    this.firstCount = this.firstNames.length;

    this.acceptableCho = [ 0, 2, 3, 5, 6, 7, 9, 11, 12, 14, 15, 16, 17, 18 ];
    this.acceptableJung = [ 0, 1, 4, 5, 6, 8, 9, 11, 14, 17, 18, 19, 20 ];
    this.acceptableJong = [ 0, 1, 4, 8, 16, 17, 19, 21 ];
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private getFirstChar(): string {
    const index: number = this.getRandomInt(0, this.firstCount);
    return String.fromCharCode(this.firstNames[index]);
  }

  private getRandomChar(): string {
    const base = 0xAC00;
    const jong = base + _.sample(this.acceptableJong);
    console.debug('jong', String.fromCharCode(jong));
    const jung = jong + 28 * _.sample(this.acceptableJung);
    console.debug('jung', String.fromCharCode(jung));
    const cho = jung + 28 * 21 * _.sample(this.acceptableCho);
    console.debug('cho', String.fromCharCode(cho));
    return String.fromCharCode(cho);
  }

  public generate(): string {
    return `${this.getFirstChar()}${this.getRandomChar()}${this.getRandomChar()}`;
  }
}

window.namer = new Namer();
