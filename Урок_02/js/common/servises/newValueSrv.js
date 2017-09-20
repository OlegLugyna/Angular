(function() {
  'use strict';
  
  angular
    .module('commonServices')  //убираем []
    .value ('nowValue', new Date()); 

})();