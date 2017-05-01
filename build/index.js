"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Namer = (function () {
    function Namer() {
        this.firstNames = [
            44608, 51060, 48149, 52572, 51221, 44053, 51312, 50980, 51109, 51076,
            50724, 54620, 49888, 49436, 44428, 54889, 50504, 49569, 47448, 54861,
            51204, 47928, 49552, 50577
        ];
        this.startCharCode = 44032;
        this.endCharCode = 55203;
    }
    Namer.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Namer.prototype.getFirstName = function () {
        var index = this.getRandomInt(0, this.firstNames.length);
        return String.fromCharCode(this.firstNames[index]);
    };
    Namer.prototype.getMidName = function () {
        var charCode = this.getRandomInt(this.startCharCode, this.endCharCode);
        return String.fromCharCode(charCode);
    };
    Namer.prototype.getLastName = function () {
        var charCode = this.getRandomInt(this.startCharCode, this.endCharCode);
        return String.fromCharCode(charCode);
    };
    Namer.prototype.generate = function () {
        var unicodeName = this.getFirstName() + this.getMidName() + this.getLastName();
        return unicodeName;
    };
    return Namer;
}());
exports.default = Namer;
window.namer = new Namer();
