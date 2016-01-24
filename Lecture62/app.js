//arrays are objects
Array.prototype.myCustom = "Cool!";

var arr = ['John','Jim','Jane'];

for (var prop in arr) {
  console.log(prop+ ': '+ arr[prop]);
}


//use standard for loop !!! it's safer!

for (var i = 0; i < arr.length; i++) {
  console.log(i+': '+arr[i]);
}
