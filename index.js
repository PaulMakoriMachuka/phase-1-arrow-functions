// 1) Function expression called divide
const divide = function() {
    return 2000 / 100;
  };
  
  // 3) Arrow function called square
  const square = x => x * x;
  
  // 5) Arrow function called add
  const add = (a, b) => a + b;
  
  // Export the functions if your test uses modules
  module.exports = {
    divide,
    square,
    add
  };
  