//object oriented JS & prototypal inheritance
//classical ve prototypal inheritance

var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function(){
      return this.firstname+ ' '+ this.lastname;
    }
};

var john = {
    firstname: "john",
    lastname: "doe"
}

//dont do this ever!!!! for demo purposes only
john.__proto__ = person;

console.log(john.getFullName());
console.log(john.firstname);


var jane = {
  firstname: 'Jane'
}

jane.__proto__= person;

console.log(jane.getFullName());
console.log(jane.firstname);
