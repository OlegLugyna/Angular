(function() {
  'use strict';
  
  angular
    .module('app', [
      'common',
      'feature'
    ])
    .config(appConfig)
    .run(appRun);
    
    function appConfig() {
      console.log('print app config');
    }

    function appRun () {
      console.log ('print app run');
    }
})();