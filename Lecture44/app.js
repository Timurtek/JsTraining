var person = {
  firstname: 'Timurtek',
  lastname: 'Bizel',
  address:{
    street: '111 Main Street.',
    city: 'Seattle',
    state:'WA'
  }
};

//function statement
function greet(name){
  console.log('Hello '+ name);
}
greet(person.firstname);

console.log('________');

//using a function expression
var greetFunc = function(name){
  console.log('Hello '+ name)
};
greetFunc(person.firstname + ' '+ person.lastname);

console.log('________');

//using an immediately invoked function expression
var greeting = function(name){

  return 'Hello '+ name;

}(person.firstname);

console.log(greeting);

console.log('________');

(function(name){

  console.log('Hello '+ name);

}('Name: '+ person.firstname+' '+person.lastname+' Address: ' +person.address.street+' '+person.address.city+' '+person.address.state));
