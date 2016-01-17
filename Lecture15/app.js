function b(){
  var myVar;
  console.log('My var func b:' + myVar);
}

function a(){
  var myVar = 2;
  console.log('My var func a:' + myVar);
  b();
}

var myVar = 1;
console.log('My var global: ' + myVar);
a();
console.log('My var global: ' + myVar);
