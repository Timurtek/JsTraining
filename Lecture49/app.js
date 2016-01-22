//closures and callbacks
function  sayHiLater(){
  var greeting = 'Hi!';

  setTimeout(function(){
    console.log(greeting);

  },3000);
}

sayHiLater();


function tellMeWhenDone(callback){

  var a = 1000; // some work

  var b = 2000;

  callback();

}

tellMeWhenDone(function(){
  console.log('I am done ');
});

tellMeWhenDone(function(){
  setTimeout(function(){
    console.log('All done done ');
  },4000);
});
