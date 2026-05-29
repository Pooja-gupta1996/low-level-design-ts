class Order {
  constructor(public items: string[]) {}
}

class OrderCalculator {
  calculateTotal(order: Order): number {
    return order.items.length * 100;
  }
}

class OrderRepository {
  save(order: Order) {
    console.log("Saving order to DB...");
  }
}

class EmailService {
  sendOrderConfirmation(order: Order) {
    console.log("Sending email...");
  }
}
