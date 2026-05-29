"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCardPayment1 {
    processPayment() {
        console.log("Processing credit card...");
    }
}
class PaypalPayment {
    processPayment() {
        console.log("Processing PayPal...");
    }
}
class PaymentService {
    processPayment(payment) {
        payment.processPayment();
    }
}
// Usage
const paymentService = new PaymentService();
paymentService.processPayment(new CreditCardPayment1());
paymentService.processPayment(new PaypalPayment());
