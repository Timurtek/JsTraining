var person = new Object();

person["firstname"] = "Timurtek";
person["lastname"] = "Bizel";
person["nickname"] = "Timiii";


var firstNameProperty = "firstname";

console.log(person);
//console.log(person["firstname"]);
console.log(person.firstname);


person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";
