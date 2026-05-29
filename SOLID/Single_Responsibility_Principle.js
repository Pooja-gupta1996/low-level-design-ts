"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    items;
    constructor(items) {
        this.items = items;
    }
}
class OrderCalculator {
    calculateTotal(order) {
        return order.items.length * 100;
    }
}
class OrderRepository {
    save(order) {
        console.log("Saving order to DB...");
    }
}
class EmailService {
    sendOrderConfirmation(order) {
        console.log("Sending email...");
    }
}
