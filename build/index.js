"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Namer = /** @class */ (function () {
    function Namer() {
        this.firstNames = [
            44608, 51060, 48149, 52572, 51221, 44053, 51312, 50980, 51109, 51076,
            50724, 54620, 49888, 49436, 44428, 54889, 50504, 49569, 47448, 54861,
            51204, 47928, 49552, 50577
        ];
        this.firstCount = this.firstNames.length;
        this.acceptableCho = [0, 2, 3, 5, 6, 7, 9, 11, 12, 14, 15, 16, 17, 18];
        this.acceptableJung = [0, 1, 4, 5, 6, 8, 9, 11, 14, 17, 18, 19, 20];
        this.acceptableJong = [0, 1, 4, 8, 16, 17, 19, 21];
    }
    Namer.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Namer.prototype.getFirstChar = function () {
        var index = this.getRandomInt(0, this.firstCount);
        return String.fromCharCode(this.firstNames[index]);
    };
    Namer.prototype.getRandomChar = function () {
        var base = 0xAC00;
        var jong = base + _.sample(this.acceptableJong);
        console.debug('jong', String.fromCharCode(jong));
        var jung = jong + 28 * _.sample(this.acceptableJung);
        console.debug('jung', String.fromCharCode(jung));
        var cho = jung + 28 * 21 * _.sample(this.acceptableCho);
        console.debug('cho', String.fromCharCode(cho));
        return String.fromCharCode(cho);
    };
    Namer.prototype.generate = function () {
        return "" + this.getFirstChar() + this.getRandomChar() + this.getRandomChar();
    };
    return Namer;
}());
exports.default = Namer;
window.namer = new Namer();
