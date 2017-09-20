(function() {
  'use strict';
  
  angular
    .module('feature')  //убираем []
    .controller ('dayCntr', dayCntr); 

  function dayCntr($scope, days) {
    //var dayNames = ['Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //$scope.day = dayNames[new Date().getDay()];
    ///$scope.tomorrowDay = dayNames[(new Date().getDay()+1)%7];

    //изменения для работы фильтра
    //$scope.day = new Date().getDay();

    //измения в связи с запуском работы сервиса (serviceDays)
      $scope.day = days.today;
  }

})();