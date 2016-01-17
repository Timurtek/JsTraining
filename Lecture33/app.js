//JSON and Object Literals
var objectLit = {
  firstname: 'Mary',
  isAProgrammer: true
};

console.log(JSON.stringify(objectLit));

console.log("__________________________");
//json formated object
var jsonVal = JSON.parse('{"firstname": "Mary","isAProgrammer": true}');

console.log(jsonVal);
