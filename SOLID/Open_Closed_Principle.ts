//Interface is not required. OCP can be achieved using abstraction in general too.
interface PaymentMethod {
  processPayment(): void;
}

class CreditCardPayment1 implements PaymentMethod {
  processPayment(): void {
    console.log("Processing credit card...");
  }
}

class PaypalPayment implements PaymentMethod {
  processPayment(): void {
    console.log("Processing PayPal...");
  }
}

class PaymentService {
  processPayment(payment: PaymentMethod): void {
    payment.processPayment();
  }
}

// Usage
const paymentService = new PaymentService();

paymentService.processPayment(
  new CreditCardPayment1()
);

paymentService.processPayment(
  new PaypalPayment()
);