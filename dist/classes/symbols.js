"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1 = void 0;
// Symbols Maker
class V1 {
    constructor(limit_ = 10) {
        this.symbolsArray = ['!', '%', '@', '$', '£', '>', '½', '§', '{', '[', '}', ')',
            '/', '|', '=', 'Ω', '≈', '√', '<', '>', 'æ', '∂', '∑', '~', '¨', '¥',
            '₺', '®', '∆', '"', '.', ';', ',', '+', '-', '_', '*', '≥', '≤', 'ƒ'];
        this.limit = limit_;
    }
    customizable() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
}
exports.V1 = V1;
