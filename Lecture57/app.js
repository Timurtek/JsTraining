//function constructors

function Person(firstname,lastname){

  this.firstname = firstname || 'default';
  this.lastname  = lastname  || 'default';

}

var john = new Person('timurtek','bizel');
var jane = new Person('jane','doe');

var arr = [john,jane];
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
