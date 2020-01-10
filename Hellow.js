/* 
*  Hellow.js JavaScript Library v.1.0.0
*  Released under the MIT license
*  Includes jQuery
*  Copyright 2020 Chet Hill.
*/
(function(global, $) {

  var Hellow = function(firstName, lastName, language) {
    return new Hellow.init(firstName, lastName, language);
  }

  Hellow.prototype = {};

  Hellow.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

  }

  Hellow.init.prototype = Hellow.prototype;

  global.Hellow = global.H$ = Hellow;

}(window, jQuery));