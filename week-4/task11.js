// Global Scope
let globalVariable = "I am a global variable";

function exampleFunction() {
  // Local Scope
  let localVariable = "I am a local variable";
  console.log(globalVariable); // Accessible here, prints: I am a global variable
  console.log(localVariable);  // Accessible here, prints: I am a local variable
}

exampleFunction();

console.log(globalVariable); // Accessible here, prints: I am a global variable
console.log(localVariable);  // Error: localVariable is not defined