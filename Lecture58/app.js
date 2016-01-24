//function constructors & prototypes

function Person(firstname,lastname,nickname,race,skillClass,dextery){

  this.firstname = firstname || 'default';
  this.lastname  = lastname  || 'default';
  this.nickname = nickname || 'Guest'+ Math.floor((Math.random() * 10) + 1);
  this.skillClass = skillClass || 'Please pick a Skill Class';

  this.race  = race  || 'Please Select your Race!';

  //stats
  this.health  = Math.max(0,100);
  this.dextery = dextery || 25;
  this.mana    = 50;

  //power
  this.attackPoint = (this.dextery/2.4);

}

//person.prototype saves memory space!!! this is the efficient way
Person.prototype.getFullName = function () {
  return  'Known as:'+ this.nickname+' Name:' +this.firstname + ' ' + this.lastname;
}

//Attack
Person.prototype.attack = function(attackTo) {
  if(attackTo.health <= 0){

    attackTo.health=0;
    console.log(attackTo.firstname+' is DEAD!!!');

  }else if(attackTo.health > 100){

    attackTo.health = 100;

  }else if(attackTo.health <= 100 && attackTo.health >0){

    if(this.health <= 0){

      console.log('You are dead and dead people cannot attack');

    }else{

      var attackPoint = this.attackPoint;
      var hitPoint = Math.round(attackPoint*.8) ;
      attackTo.health = attackTo.health - hitPoint;
      console.log(this.firstname+' attacked ' + attackTo.firstname+'!! Damage: '+hitPoint);

    }

  return attackTo.health;

  }
}

//HEAL

Person.prototype.heal = function(){

  if(this.health <= 0 ){

    console.log('You are dead.');

    return this.health;

  }else if(this.health >= 100){

    console.log(this.firstname+"'s health is full.'");

    return this.health;

  }else{

    var healthPoints = 10;

    this.health = this.health + healthPoints;

    if(this.health > 100){
      var healthPoints = ( 100 - (this.health - healthPoints));
      this.health = 100;
    }
    console.log(this.firstname+" gained "+healthPoints+" health point(s).");

    return this.health;
  }
}


//new creates an object
var timurtek = new Person ('Timurtek','bizel','Gandalf the Gray','Human','Mage'   ,50);
var jane = new Person     ('Jane'    ,'doe'  ,'Lalala'          ,'Orc'  ,'Fighter',100);
console.log(timurtek);
console.log(jane);
