let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = 'Kumar';

// Type 'number' is not assignable to type 'boolean'
// found = 0;
// Type 'string' is not assignable to type 'number'
// grade = "A";
// Type 'boolean' is not assignable to type 'string'
// firstName = false;

console.log(found);
console.log("The grade is " + grade);
// String concatenation
console.log("Hi " + firstName + " " + lastName);
// Template string
console.log(`Hi ${firstName} ${lastName}`);