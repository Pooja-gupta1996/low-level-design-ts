// lsp-violation.ts

class Bird {
  fly(): void {
    console.log("Bird is flying in the sky");
  }
}

class Sparrow extends Bird {
  fly(): void {
    console.log("Sparrow flying fast");
  }
}

class Penguin extends Bird {
  fly(): void {
    // Penguin technically has fly method
    // but behavior is wrong
    console.log("Penguin is just walking");
  }
}

function makeBirdReachDestination(bird: Bird): void {
  console.log("Starting journey...");

  bird.fly();

  console.log("Bird reached destination\n");
}

makeBirdReachDestination(new Sparrow());

makeBirdReachDestination(new Penguin());