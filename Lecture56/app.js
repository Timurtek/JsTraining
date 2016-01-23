//reflection and extend

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


//reflection
// for (var prop in john){
//   //Checks if John hasOwnProperty
//     if(john.hasOwnProperty(prop)){
//       console.log(prop + ': '+ john[prop]);
//     }
// }

var jane = {
  address: '111 main st.',
  getFormalFullNam: function(){
    return this.firstname+ ' '+ this.lastname;
  }
};
var jim = {
  getFirstName: function(){
    return firstname;
  }
};

_.extend(john,jane,jim);
console.log(john);
