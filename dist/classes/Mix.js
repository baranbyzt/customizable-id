"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V4 = void 0;
// Mix
class V4 {
    constructor(limit_ = 10) {
        this.limit = 10;
        this.lettersSmallArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.lettersBigArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
        this.limit = limit_;
    }
    customizableV1() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)];
        }
        return customValue;
    }
    customizableV2() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
        }
        return customValue;
    }
    customizableV3() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
        }
        return customValue;
    }
}
exports.V4 = V4;
