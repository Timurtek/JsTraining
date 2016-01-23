//function constructors & prototypes

function Person(firstname,lastname,race){
  this.firstname = firstname || 'default';
  this.lastname  = lastname  || 'default';
  this.race  = race  || 'human';
}

//person.prototype saves memory space!!! this is th efficient way
Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
}

//new creates an object
var john = new Person('timurtek','bizel','elf');
var jane = new Person('jane','doe');

console.log(john);
console.log(jane);
