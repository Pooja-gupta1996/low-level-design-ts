"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sparrow1 {
    fly() {
        console.log("Flying...");
    }
}
class Penguin1 {
    swim() {
        console.log("Swimming..."); // lsp-fixed.ts
        class Bird1 {
            eat() {
                console.log("Bird eating");
            }
        }
        class FlyingBird extends Bird1 {
            fly() {
                console.log("Flying in sky");
            }
        }
        class Sparrow extends FlyingBird {
            fly() {
                console.log("Sparrow flying fast");
            }
        }
        class Penguin extends Bird1 {
            walk() {
                console.log("Penguin walking");
            }
        }
        function makeFlyingBirdReachDestination(bird) {
            console.log("Starting journey...");
            bird.fly();
            console.log("Bird reached destination\n");
        }
        makeFlyingBirdReachDestination(new Sparrow());
        // ❌ Compile-time error now
        // makeFlyingBirdReachDestination(new Penguin());
    }
}
