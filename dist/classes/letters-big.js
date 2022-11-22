"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbols = void 0;
class Symbols {
    // alfabet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    constructor(limit_) {
        this.limit = 10;
        this.limit = limit_;
    }
    makeMix() {
        let newnumber = "";
        for (let i = 1; i <= this.limit; i++) {
            newnumber += Math.floor(Math.random() * 10);
        }
        return newnumber;
    }
}
exports.Symbols = Symbols;
