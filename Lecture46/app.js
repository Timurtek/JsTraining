//understanding closures.
function greet(whatToSay){

  return function(name){
    console.log(whatToSay+' '+name);
  }

}
//greet('Hi')('Tony');
var sayHi = greet('Hi');
sayHi('Timurtek');
