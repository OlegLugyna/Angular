(function() {
  'use strict';
  
  angular
    .module('common', [
      'commonFilters',
      'commonServices'
    ])
    
    .config(commonConfig)
    .run(commonRun);
    
    function commonConfig() {
      console.log('print common config');
    }

    function commonRun() {
      console.log ('print common run');
    }
})();