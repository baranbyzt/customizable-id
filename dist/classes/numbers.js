"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2 = void 0;
// Numbers
class V2 {
    constructor(limit_ = 10) {
        this.limit = 10;
        this.limit = limit_;
    }
    customizable() {
        let customValue = "";
        for (let i = 1; i <= this.limit; i++) {
            customValue += Math.floor(Math.random() * 10);
        }
        return customValue;
    }
}
exports.V2 = V2;
