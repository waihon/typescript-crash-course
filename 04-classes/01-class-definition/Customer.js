var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName + ' ' + myCustomer.lastName);
myCustomer.firstName = "Susan";
myCustomer.lastName = "Public";
console.log(myCustomer.firstName + ' ' + myCustomer.lastName);
