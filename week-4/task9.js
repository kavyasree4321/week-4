function square(num) {
    return num * num;
  }
  
  // Function Expression
  const squareExpression = function(num) {
    return num * num;
  };
  
  // Arrow Function
  const squareArrow = (num) => num * num;
  console.log("function declaration"+square(4));
  console.log("function expression"+squareExpression(4));
  console.log(" Arrow function"+squareArrow(4));