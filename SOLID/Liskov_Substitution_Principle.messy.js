"use strict";
// lsp-violation.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Bird {
    fly() {
        console.log("Bird is flying in the sky");
    }
}
class Sparrow extends Bird {
    fly() {
        console.log("Sparrow flying fast");
    }
}
class Penguin extends Bird {
    fly() {
        // Penguin technically has fly method
        // but behavior is wrong
        console.log("Penguin is just walking");
    }
}
function makeBirdReachDestination(bird) {
    console.log("Starting journey...");
    bird.fly();
    console.log("Bird reached destination\n");
}
makeBirdReachDestination(new Sparrow());
makeBirdReachDestination(new Penguin());
