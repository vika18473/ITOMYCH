"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polynom = void 0;
const nerdamer_ts_1 = require("nerdamer-ts");
function Polynom(str1, str2) {
    const res = (0, nerdamer_ts_1.default)(`expand((${str1})(${str2}))`)
        .toString()
        .split('')
        .filter((p) => p !== '*')
        .join('');
    return res;
}
exports.Polynom = Polynom;
console.log(Polynom("x+1", "x-1"));
//# sourceMappingURL=task2.js.map