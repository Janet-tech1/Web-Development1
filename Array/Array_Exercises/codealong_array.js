let fruits = ["apple", "banana", "orange", "grape"];
let numbers = [10, 25, 30, 45, 50];
let booleans = [true, false, true, true];
let mixedArray = ["John", 25, true, "student"];

// Empty array
let emptyArray = [];

// Display the arrays
console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);

console.log(""); // Empty line

// Array length property
console.log("Number of fruits:", fruits.length);
console.log("Number of numbers:", numbers.length);
console.log("Empty array length:", emptyArray.length);

console.log(""); // Empty line

// Accessing individual elements with index [0, 1, 2, ...]
console.log("First fruit:", fruits[0]);     // apple
console.log("Second fruit:", fruits[1]);    // banana
console.log("Last fruit:", fruits[fruits.length - 1]); // grape

console.log("First number:", numbers[0]);   // 10
console.log("Third number:", numbers[2]);   // 30

// What happens with invalid indexes?
console.log("Index that doesn't exist:", fruits[10]); // undefined

// MODIFYING ARRAYS
let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);

// Changing existing elements
colors[0] = "purple";
colors[2] = "yellow";
console.log("After changes:", colors);

console.log(""); // Empty line

// Adding elements to the end with push()
let shoppingList = ["milk", "bread"];
console.log("Original list:", shoppingList);

shoppingList.push("eggs");
shoppingList.push("cheese", "butter"); // Can add multiple items
console.log("After adding items:", shoppingList);

console.log(""); // Empty line

// Removing the last element with pop()
let removedItem = shoppingList.pop(); // pop() returns the removed item
console.log("Removed item:", removedItem);
console.log("List after removing:", shoppingList);

console.log(""); // Empty line

// Adding elements to the beginning with unshift()
shoppingList.unshift("apples");
console.log("After adding to front:", shoppingList);

// Removing the first element with shift()
let firstItem = shoppingList.shift();
console.log("Removed first item:", firstItem);
console.log("Final list:", shoppingList);

console.log(""); // Empty line

// Finding elements
let students = ["Alice", "Bob", "Charlie", "Diana"];
console.log("Students:", students);
console.log("Is Bob in class?", students.includes("Bob"));
console.log("Where is Charlie?", students.indexOf("Charlie"));
console.log("Where is Frank?", students.indexOf("Frank")); // -1 means not found



