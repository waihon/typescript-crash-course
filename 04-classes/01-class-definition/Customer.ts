class Customer {
  firstName: string; // public by default
  lastName: string;  // public by default


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName + ' ' + myCustomer.lastName);

myCustomer.firstName = "Susan";
myCustomer.lastName = "Public";

console.log(myCustomer.firstName + ' ' + myCustomer.lastName);
