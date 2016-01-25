//building our own mini library

//focusing on structure

// we are going to call our library greetr


//when given a firstname, last name and optional language, it generates formal and informal greetings

//support english and spanish

// reusable library/framework

//easy to type 'G$()' structure

//support jQuery

(function(global, $){

  var Greetr = function(firstname, lastname, language){

    return new Greetr.init(firstname,lastname, language);

  };

  //Languages

  var supportedLanguages = ['en','es'];

  var greetings = {
    en:'Hello',
    es:'Hola'
  };

  var formalGreetings = {
    en:'Greetings',
    es:'Saludos'
  };

  var logMessages = {
    en:'Logged in ',
    es:'Inicio sesion '
  };

  //Languages End

  Greetr.prototype= {
    fullName:function(){
      return this.firstname+' '+ this.lastname;
    },

    validate: function(){
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },
    greeting: function() {
      return greetings[this.language]+ ' '+this.firstname + ' !' ;
    },

    formalGreeting: function() {
      return formalGreetings[this.language]+ ' '+this.fullName() + ' !' ;
    },

    greet: function(formal){
        var msg;
        if(formal){
          msg= this.formalGreeting();
        }else{
          msg= this.greeting();
        }
        if(console){
          console.log(msg);
        }

        //this regers to the calling objet at execution time
        //makes the method chainable.

        return this;

    },
    log: function(){

      if(console){

        console.log(logMessages[this.language]+ ' : '+ this.fullName());

      }
      return this;
    },
    setLang: function(lang){

      this.language = lang;

      this.validate();

      return this;
    }

  };

  Greetr.init = function(firstname, lastname, language){

      var self = this;
      self.firstname = firstname || 'John';
      self.lastname  = lastname  || 'Doe' ;
      self.language  = language  || 'en'  ;

  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, $));
