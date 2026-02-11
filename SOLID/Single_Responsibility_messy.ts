class Order {
  constructor(private items: string[]) {}

  calculateTotal() {
    return this.items.length * 100;
  }
  saveToDatabase() {
    console.log("Saving order to DB...");
  }

  sendConfirmationEmail() {
    console.log("Sending email...");
  }
}
