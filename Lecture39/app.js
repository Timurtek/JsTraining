//arguments and spread
function greet(firstname, lastname, language){
  language = language || 'en';
  if(arguments.length === 0){
    console.log('Missin paramaters!');
    console.log('---------------------');
    return;

  }
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('---------------------');
}

greet();
greet('John');
greet('John','doe');
greet('John','doe','es');
