//object literal syntax
var timurtek = {
  firstname: 'Timurtek',
  lastname: 'Bizel',
  address:{
    street: 'Main St.',
    city: 'New York',
    state: 'NY'
  }
};

function greet(person){
  console.log('Hi ' + person.firstname);
}

greet(timurtek);
greet({firstname: 'Adele', lastname: 'Doe'});

timurtek.address2 = {
  aptNum: '207'
}
