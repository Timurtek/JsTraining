//objects, functions, and this

function a(){
  console.log(this);
  //this variable is a global object when revoking a function
  this.newvariable = 'hello';
}
var b = function (){
  console.log(this);
}

//a();
//console.log(newvariable);
//b();


//when function is a method of an object the this keyword points to the object.
//setting up var self = this limits the scope to the function
var person={
  name: 'Timur',
  log: function(){
    var self = this;
    console.log('Name: '+self.name);

    var setname = function(newname){
      self.name = newname;
    }
    setname('Timurtek');
    console.log('Name has been changed to: '+ self.name)
    console.log(self);
  }
};

person.log();
