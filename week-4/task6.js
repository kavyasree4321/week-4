let age = 25; 
if (age >= 0 && age <= 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teen.");
} else if (age >= 20 && age <= 64) {
    console.log("You are an adult.");
} else if (age >= 65) {
    console.log("You are a senior.");
} else {
    console.log("Invalid age.");
}