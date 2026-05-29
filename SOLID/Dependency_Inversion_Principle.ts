interface NotificationService {
  sendMessage(): void;
}

class EmailService implements NotificationService {
  sendMessage() {
    console.log("Email sent");
  }
}

class SmsService implements NotificationService {
  sendMessage() {
    console.log("SMS sent");
  }
}
//high level module
class Login_Service {
  constructor(private notificationService: NotificationService) {

  }

  login() {
    console.log("User logged in");
    this.notificationService.sendMessage();
  }
}
//usage
const email = new EmailService();

const logina = new Login_Service(email);

logina.login();

// DIP = principle  - WHAT to achieve
// DI = implementation technique - HOW to achieve it
// Dependency Inversion is a design principle where modules depend on abstractions, while Dependency Injection is a technique used to provide dependencies from outside to achieve that principle.