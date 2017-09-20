(function() {
  'use strict';
  
  angular
    .module('feature')  //убираем []
    .service ('days', days); 

  function days(nowValue) {
    this.today = nowValue.getDay();
    this.tomorrow =(this.today+1)%7;
  }
    //коментим, т.к. подключаем newValueSrv
  // function days() {
  //   this.today = new Date().getDay();
  //   this.tomorrow = (this.today + 1)%7;
    
  //  }

})();