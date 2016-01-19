//IIFE
(function(name){
  var greeting = "Hello";
  console.log(greeting+ ' '+name);
}('Timurtek'));

function name(name){
  var greeting = "Hello";
  console.log(greeting+ ' '+name);
}
name('Timurtek');

console.log(greeting);
