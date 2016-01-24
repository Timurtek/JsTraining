//object.create & pure prototypal inheritance

var person = {
    firstname : "default",
    lastname : "default",
    greet: function(){
      return 'Hi '+ this.firstname+ ' '+ this.lastname;
    }
};

var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

console.log(john);
