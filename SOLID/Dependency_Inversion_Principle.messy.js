"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//low level module as it can change with time 
class EmailService1 {
    sendMessage() {
        console.log("Email sent to user");
    }
}
//high level module where the actual business logic is implemented
class LoginService {
    emailService1;
    constructor() {
        this.emailService1 = new EmailService1(); // tightly coupled
    }
    login() {
        console.log("User logged in");
        this.emailService1.sendMessage();
    }
}
const login = new LoginService();
login.login();
// We don't want email now, send SMS.
// Now you must change LoginService.
class SmsService1 {
    sendMessage() {
        console.log("SMS sent to user");
    }
}
class LoginService1 {
    smsService1;
    constructor() {
        this.smsService1 = new SmsService1(); // changed code
    }
    login() {
        console.log("User logged in");
        this.smsService1.sendMessage();
    }
}
//again changes in LoginService
