"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Keep behavior that naturally belongs to the entity inside the class. 
// Move external concerns (DB, API, email, logging, payment) outside.
class Order {
    items;
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
}
class OrderCalculator {
    calculateTotal(order) {
        return order.getItems().length * 100;
    }
}
class OrderRepository {
    save(order) {
        console.log("Saving order to DB...", order.getItems());
    }
}
class EmailService {
    sendOrderConfirmation() {
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
