"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Letters = void 0;
// Letters
class Letters {
    constructor(limit_ = 10) {
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
    // sadece küçük harfler
    customizableV1() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)];
        }
        return customValue;
    }
    // sadece büyük harfler
    customizableV2() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
        }
        return customValue;
    }
    // büyük/küçük random karışık
    customizableV3() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)];
        }
        return customValue;
    }
    // sadece sayılar
    customizableV4() {
        let customValue = "";
        for (let i = 1; i <= this.limit; i++) {
            customValue += Math.floor(Math.random() * 10);
        }
        return customValue;
    }
    // sadece semboller
    customizableV5() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    // sayı b/k-harf sembol random karışık
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
    // sembol - nunbers
    customizableV7() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += Math.floor(Math.random() * 10) :
                customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    // sembol ve küçük harfler
    customizableV8() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    // sembol ve büyük harfler
    customizableV9() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)] :
                customValue += this.symbolsArray[Math.floor(Math.random() * this.symbolsArray.length)];
        }
        return customValue;
    }
    // number - k.harf
    customizableV10() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray[Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += Math.floor(Math.random() * 10);
        }
        return customValue;
    }
    // number - b.harf
    customizableV11() {
        let customValue = '';
        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersBigArray[Math.floor(Math.random() * this.lettersBigArray.length)] :
                customValue += Math.floor(Math.random() * 10);
        }
        return customValue;
    }
    // ----- 3'lü ler -----
    // sayı küçük-harf sembol random karışık
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
    // sayı büyük-harf sembol random karışık
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
    // küçük-harf büyük-harf sembol random karışık
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
exports.Letters = Letters;
