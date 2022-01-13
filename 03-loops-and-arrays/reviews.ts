// Declare an array
let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  // Index into the array
  console.log(reviews[i]);
  total += reviews[i];
}

let average: number = total / reviews.length;

console.log("Review average = " + average);