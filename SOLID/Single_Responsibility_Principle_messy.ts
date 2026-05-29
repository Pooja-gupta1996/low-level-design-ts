//Keep behavior that naturally belongs to the entity inside the class. 
// Move external concerns (DB, API, email, logging, payment) outside.
class Order {
  constructor(private items: string[]) {}

  getItems() {
    return this.items;
  }
}

class OrderCalculator {
  calculateTotal(order: Order): number {
    return order.getItems().length * 100;
  }
}

class OrderRepository {
  save(order: Order): void {
    console.log("Saving order to DB...",order.getItems());
  }
}

class EmailService {
  sendOrderConfirmation(): void {
    console.log("Sending email...");
  }
}

// Usage
const order = new Order(["item1", "item2", "item3"]);

const calculator = new OrderCalculator();
console.log(calculator.calculateTotal(order));

const repository = new OrderRepository();
repository.save(order);

const emailService = new EmailService();
emailService.sendOrderConfirmation();