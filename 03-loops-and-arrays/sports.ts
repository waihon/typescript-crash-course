let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// Use the simplified for loop
for (let tempSport of sportsOne) {
  if (tempSport === "Cricket") {
    console.log(tempSport + " << My Favorite!");
  }
  else {
    console.log(tempSport);
  }
}