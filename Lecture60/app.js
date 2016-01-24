//Built-in constructors
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPossitive = function () {
  return this > 0;
}
//when you are using these built in function constructors you are actually
//creating an object
