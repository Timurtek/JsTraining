//function overloading
function greet(firstname, lastname, language){
  language = language || 'en';

  if (language === 'en') {
    console.log('Hello ' + firstname + ' '+lastname);
  }
  if (language === 'es') {
    console.log('Hola ' + firstname + ' '+lastname);
  }
}

function greetEn(firstname,lastname){
  greet(firstname,lastname, 'en');
}
function greetEs(firstname,lastname){
  greet(firstname,lastname, 'es');
}

greetEn('Timurtek', 'Bizel');
greetEs('Timurtek', 'Bizel');
