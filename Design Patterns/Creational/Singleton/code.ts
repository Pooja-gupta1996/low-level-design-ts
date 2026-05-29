class logger {
    private log1: string;
    constructor(log1: string) {
        this.log1 = log1;
    }
    getter() {        
        return this.log1;
    }
    setter(log1: string) {
        this.log1 = log1;
    }
}
const obj = new logger("Initial log");
console.log(obj.getter()); // Output: Initial log