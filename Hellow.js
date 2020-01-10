/* 
*  Hellow.js JavaScript Library v.1.0.0
*  Released under the MIT license
*  Includes jQuery
*  Copyright 2020 Chet Hill.
*/
(function(global, $) {
  
  // 'new' an object
  var Hellow = function(firstName, lastName, language) {
    return new Hellow.init(firstName, lastName, language);
  }
  
  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  // logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }

  // Create a prototype for the library
  Hellow.prototype = {
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },

    validate: function() {
      // check if language is valid - references supported langs
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language'
      }
    },

    greeting: function() {
      return `${greetings[this.language]} ${this.firstName}!`; 
    },

    formalGreeting: function() {
      return `${formalGreetings[this.language]} ${this.fullName()}!`; 
    },

    greet: function(formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if (console) {
        console.log(`${logMessages[this.language]} : ${this.fullName()}`);
      }
      return this;
    },

    // sets the language and validates it
    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      var msg;
      // turn this into a function
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    }

  };

  Hellow.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  }

  // so we dont have to use the 'new' keyword
  Hellow.init.prototype = Hellow.prototype;

  // attach Hellow to the global object and set '$H' shorthand
  global.Hellow = global.H$ = Hellow;

}(window, jQuery));