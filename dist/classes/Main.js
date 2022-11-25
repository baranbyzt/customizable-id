"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customizable = void 0;
// customizable
class Customizable {
    constructor(limit_ = 22) {
        this.limit = 10;
        this.lettersSmallArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.lettersBigArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
        this.symbolsArray = ['!', '%', '@', '$', '£', '>', '½', '§', '{', '[', '}', ')',
            '/', '|', '=', 'Ω', '≈', '√', '<', '>', 'æ', '∂', '∑', '~', '¨', '¥',
            '₺', '®', '∆', '"', '.', ';', ',', '+', '-', '_', '*', '≥', '≤', 'ƒ'];
        this.limit = limit_;
    }
    // only lowercase letters
    customizableV1() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)];
        }
        return customValue;
    }
    // capital letters only
    customizableV2() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
        }
        return customValue;
    }
    // mixed upper or lower case letters
    customizableV3() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
        }
        return customValue;
    }
    // only numbers
    customizableV4() {
        let customValue = "";
        for (let i = 1; i <= this.limit; i++) {
            customValue += Math.floor(Math.random() * 10);
        }
        return customValue;
    }
    // only symbols
    customizableV5() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    // upper & lowercase letters symbols & numbers mixed
    customizableV6() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)];
                    break;
                case 1:
                    customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
                    break;
                case 2:
                    customValue += Math.floor(Math.random() * 10);
                    break;
                case 3:
                    customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
                    break;
                default:
                    console.warn("switch/case err");
            }
        }
        return customValue;
    }
    // symbols and numbers
    customizableV7() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += Math.floor(Math.random() * 10) :
                customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    // lowercase letters and symbols 
    customizableV8() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    //  upper letters  symbols
    customizableV9() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)] :
                customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    // lowercase letters and numbers 
    customizableV10() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += Math.floor(Math.random() * 10);
        }
        return customValue;
    }
    // upper letters  and numbers
    customizableV11() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)] :
                customValue += Math.floor(Math.random() * 10);
        }
        return customValue;
    }
    // lowercase letters and numbers and symbols
    customizableV12() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)];
                    break;
                case 1:
                    customValue += Math.floor(Math.random() * 10);
                    break;
                case 2:
                    customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
                    break;
                default:
                    console.warn("switch/case err");
            }
        }
        return customValue;
    }
    // lowercase and uppercase letters mixed and symbols
    customizableV13() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
                    break;
                case 1:
                    customValue += Math.floor(Math.random() * 10);
                    break;
                case 2:
                    customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
                    break;
                default:
                    console.warn("switch/case err");
            }
        }
        return customValue;
    }
    // lowercase uppercase symbol random mixed
    customizableV14() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
                    break;
                case 1:
                    customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)];
                    break;
                case 2:
                    customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
                    break;
                default:
                    console.warn("switch/case err");
            }
        }
        return customValue;
    }
    // capital letters lowercase letters numbers
    customizableV15() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
                    break;
                case 1:
                    customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)];
                    break;
                case 2:
                    customValue += Math.floor(Math.random() * 10);
                    break;
                default:
                    console.warn("switch/case err");
            }
        }
        return customValue;
    }
}
exports.Customizable = Customizable;
