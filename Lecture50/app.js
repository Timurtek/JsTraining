//call(), apply(), and bind()

var person= {
  firstname: 'Timurtek',
  lastname:'Doe',
  getFullName: function(){
    var fullname = this.firstname +' '+ this.lastname;
    return fullname;
  }
};

var logName = function(lang1,lang2){

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 +' '+ lang2 );
    console.log('_______________________');
}.bind(person);
//bind creates a copy of the function.
logName('en','es');
//call calls the function
logName.call(person,'Turkish','German');

//apply and call are the same thing. only difference is apply accepts two arguments.
//it takes the new context and an array.
logName.apply(person, ['47','33']);

var person2 = {
  firstname: 'Jane',
  lastname:'Doe'
};

//borrowed a funciton from person object getFullName
//and applied that function to person2 object.
//you can grab methods from other objects and use them
console.log(person.getFullName.apply(person2));



//function currying
//bind creates a copy of the function

function multiply(a,b){
  return a*b;
}

var multipleByTwo = multiply.bind(this,2);
//this ,2 sets the first argument to # 2
/*
multipleByTwo function becomes.

function(b){
  var a=2;
  return a * b ;
}

*/
console.log(multipleByTwo(1));
