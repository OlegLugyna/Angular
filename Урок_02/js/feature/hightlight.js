
(function() {
  'use strict';
  
  angular
    .module('feature') 
    .directive ('hightlight', hightlight); 
  //Меняем эту функцию. Правим в связи с запуском фильтра.
  // function hightlight() {
  //   return {
  //     link: function(scope, element, attrs) {
  //       // console.log(element);
  //       // console.log(attrs);
  //       //в html прописываем в h4 эту директиву и указываем значение

  //       if(scope.day === attrs['hightlight']) {
  //         element.css('color', 'red');
          
  //       }

  //     }
  //   };
    

  // }
  // используем сервис $filter

  function hightlight($filter) {
    var dayFilter = $filter('dayName');
      return {
        link: function(scope, element, attrs) {
  
          if(dayFilter(scope.day) === attrs['hightlight']) {
            element.css('color', 'red');
            
          }
  
        }
      };
      
  
    }

})();