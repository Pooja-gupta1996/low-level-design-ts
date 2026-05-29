class PaymentService1 {
  processPayment(type: string) {
    if (type === "credit") {
      console.log("Processing credit card...");
    } else if (type === "paypal") {
      console.log("Processing PayPal...");
    }
  }
}
// SRP perspective → okay (payment responsibility only)
// OCP perspective → bad (must modify class for every new payment type)