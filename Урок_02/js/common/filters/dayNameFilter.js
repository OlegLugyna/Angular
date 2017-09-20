
(function() {
  'use strict';
  
  angular
    .module('commonFilters') 
    .filter ('dayName', dayName); 

  function dayName () {
    var dayNames = ['Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return function (input) {
      // return angular.isNumber(input)? dayNames[input] : input; (равнозначные записи)
      if(angular.isNumber(input)) {
        return dayNames[input];
      } else {
        return input;
      }
      

    }
  }

})();