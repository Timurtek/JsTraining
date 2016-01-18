//array
//js array can hold collections of anything

var arr = [
  1,
  false,
  {
    name: 'timurtek',
    address: '111 main st.'
  },
  function(name){
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  "Hello "];

console.log(arr);

arr[3](arr[2].name);
