class Customer {
  // Using _ for private property is just a convension
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Accessors (Getters and Setters) are public by default
  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName + ' ' + myCustomer.lastName);
