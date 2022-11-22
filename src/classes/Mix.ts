// Mix
export class V4 {
    limit = 10;
    lettersSmallArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    lettersBigArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

    constructor(limit_: number = 10) {
        this.limit = limit_
    }

    customizableV1(): string {
        let customValue = ''

        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersSmallArray
            [Math.floor(Math.random() * this.lettersSmallArray.length)]
        }

        return customValue
    }
    customizableV2(): string {
        let customValue = ''

        for (let i = 1; i <= this.limit; i++) {
            customValue += this.lettersBigArray
            [Math.floor(Math.random() * this.lettersBigArray.length)]
        }

        return customValue
    }
    customizableV3(): string {
        let customValue = ''

        for (let i = 1; i <= this.limit; i++) {
            Math.floor(Math.random() * 2) === 1 ?
                customValue += this.lettersSmallArray
                [Math.floor(Math.random() * this.lettersSmallArray.length)] :
                customValue += this.lettersBigArray
                [Math.floor(Math.random() * this.lettersBigArray.length)]
        }


        return customValue
    }
}
