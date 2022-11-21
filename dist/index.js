"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.custom = void 0;
const Letters_1 = require("./classes/Letters");
let custom = (limit) => {
    let NumberCheckBBs = new Letters_1.Letters(limit);
    return NumberCheckBBs.customizableV15();
};
exports.custom = custom;
