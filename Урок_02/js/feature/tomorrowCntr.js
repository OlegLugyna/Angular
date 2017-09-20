
(function() {
  'use strict';
  
  angular
    .module('feature') 
    .controller ('tomorrowCntr', dayCntr); 

  function dayCntr($scope, days) {
    //var dayNames = ['Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //$scope.day = dayNames[new Date().getDay()];
    //подключаем фильтр
    //$scope.tomorrowDay = dayNames[(new Date().getDay()+1)%7];

    // кооментим, т.к. запускаем сервис 
    //$scope.tomorrowDay = (new Date().getDay()+1)%7;

    //используем сервис serviceDay
    $scope.tomorrowDay = days.tomorrow;

  }

})();