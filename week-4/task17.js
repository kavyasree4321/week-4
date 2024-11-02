// Initial array
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Adding an element at the end of the array
fruits.push("Elderberry");
console.log("After adding Elderberry:", fruits); // ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// Removing the first element from the array
fruits.shift();
console.log("After removing the first element:", fruits); // ["Banana", "Cherry", "Date", "Elderberry"]

// Updating an element in the array
fruits[2] = "Dragonfruit"; // Update "Elderberry" to "Dragonfruit"
console.log("After updating the third element:", fruits); // ["Banana", "Cherry", "Dragonfruit", "Elderberry"]

// Adding an element at a specific index
fruits.splice(1, 0, "Blueberry"); // Add "Blueberry" at index 1
console.log("After adding Blueberry at index 1:", fruits); // ["Banana", "Blueberry", "Cherry", "Dragonfruit", "Elderberry"]

// Removing an element at a specific index
fruits.splice(3, 1); // Remove "Dragonfruit" from index 3
console.log("After removing the element at index 3:", fruits); // ["Banana", "Blueberry", "Cherry", "Elderberry"]