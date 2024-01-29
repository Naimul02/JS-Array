// practice task 1
const fruits = ["apple", "banana", "orange", "papaya", "mango"];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log("The final array is : ", fruits);

// practice task 2
const touristDestination = ["Cox's Bazar", "Bandarban", "Sylhet"];
console.log(touristDestination);
touristDestination.push("Feni");
console.log(touristDestination);
touristDestination.push("Chittagong", "Saint-Martin");
console.log(touristDestination);

touristDestination.pop();
console.log(touristDestination);

// practice task 3
const books = ["Bangla", "English", "Mathmetics", "Accounting"];
console.log(books.includes("javascript"));

if (books.includes("javascript")) {
  console.log("yes . boi ta array er moddhe ache");
} else {
  console.log("na vai . boi ta ei muhurte available nai.");
}

// practice task 4
const price = [54, 54, 67, 78, 12, 34];
const emptyArray = [];
const string = "hello vai";
const isItTrue = true;

console.log(Array.isArray(price));
console.log(Array.isArray(emptyArray));
console.log(Array.isArray(string));
console.log(Array.isArray(isItTrue));

// practice task 5
const amarPochondo = [
  "apni",
  "valo",
  "thaken",
  "doya",
  "kori",
  "apnar",
  "jonno",
];
console.log(amarPochondo);
const amarIccha = [
  "somman",
  "sroddha",
  "ar",
  "valobasa",
  "roilo",
  "apnar",
  "jonno",
];
console.log(amarIccha);

const result = amarPochondo.concat(amarIccha);
console.log(result);
