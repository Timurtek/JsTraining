//functions statements and functions expressions
  // function statement hoisted into memory during execution context.
  function greet(){
    console.log('hi');
  }
  greet();

  //functions expression used as part of the equals operator.
  var anonGreet = function(){
    console.log('HIIII');
  };

  anonGreet();

  function log(a){
    a();
  }
// we have a function expression passing as a paramater to another function.
  log(function(){
    console.log('asdasdasdas');
  });

//You can use functions like you use variables. don't forget function is an object in JS


//This is a whole another level of programming called functional programming.
