// Symbols Maker
export class V1 {
    limit: number;
    symbolsArray = ['!', '%', '@', '$', '£', '>', '½', '§', '{', '[', '}', ')'
        , '/', '|', '=', 'Ω', '≈', '√', '<', '>', 'æ', '∂', '∑', '~', '¨', '¥'
        , '₺', '®', '∆', '"', '.', ';', ',', '+', '-', '_', '*', '≥', '≤', 'ƒ'];

    constructor(limit_: number = 10) {
        this.limit = limit_
    }

    customizable(): string {
        let customValue = ''

        for (let i = 1; i <= this.limit; i++) {
            customValue += this.symbolsArray
            [Math.floor(Math.random() * this.symbolsArray.length)]
        }

        return customValue
    }
}

