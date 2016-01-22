//function factories

function  makeGreeting(language){

    return function (firstname,lastname,age){
      if(language === 'es' && age <= 21){
        console.log('Hola! ' + firstname+' '+lastname+' can drink. Who cares! Amigo.');
      }
      if(language === 'en' && age >= 21){
        console.log('Hello! ' + firstname+' '+lastname+' can drink he is 21+');
      }else if(language==='en' && age < 21){
        console.log('US Laws: Sorry! ' + firstname+' '+lastname+' cannot drink hahahaha. because he is not 21 yet.');
      }
    }
}

var canDrink = makeGreeting('es');
var cantDrink = makeGreeting('en');

canDrink('Timurtek','Bizel', 20);
cantDrink('Timurtek','Bizel', 21);
