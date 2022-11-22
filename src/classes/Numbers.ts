// Numbers
export class V2 {
    limit = 10;

    constructor(limit_: number = 10) {
        this.limit = limit_
    }

    customizable(): string {
        let customValue = "";

        for (let i = 1; i <= this.limit; i++) {
            customValue += Math.floor(Math.random() * 10);
        }

        return customValue
    }
}
