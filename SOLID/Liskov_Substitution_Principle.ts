interface Bird1 {}

interface FlyingBird extends Bird1 {
  fly(): void;
}

class Sparrow1 implements FlyingBird {
  fly() {
    console.log("Flying...");
  }
}

class Penguin1 implements Bird1 {
  swim() {
    console.log("Swimming...");// lsp-fixed.ts

class Bird1 {
  eat(): void {
    console.log("Bird eating");
  }
}

class FlyingBird extends Bird1 {
  fly(): void {
    console.log("Flying in sky");
  }
}

class Sparrow extends FlyingBird {
  fly(): void {
    console.log("Sparrow flying fast");
  }
}

class Penguin extends Bird1 {
  walk(): void {
    console.log("Penguin walking");
  }
}

function makeFlyingBirdReachDestination(
  bird: FlyingBird
): void {
  console.log("Starting journey...");

  bird.fly();

  console.log("Bird reached destination\n");
}

makeFlyingBirdReachDestination(new Sparrow());

// ❌ Compile-time error now
// makeFlyingBirdReachDestination(new Penguin());
  }
}
