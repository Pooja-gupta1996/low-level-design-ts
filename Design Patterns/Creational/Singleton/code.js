"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class logger {
    log1;
    constructor(log1) {
        this.log1 = log1;
    }
    getter() {
        return this.log1;
    }
    setter(log1) {
        this.log1 = log1;
    }
}
const obj = new logger("Initial log");
console.log(obj.getter()); // Output: Initial log
