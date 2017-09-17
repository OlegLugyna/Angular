(function() {
  'use strict';

  angular.module('todoApp',[])
    .run(runApp)

    .value('model', {
      user:'Oleg',
      userPhoto:'./images/oleg.jpg'//,
      // items: [
      //   { 'action': 'Estimate...', done: false },
      //   { 'action': 'Create...', done: false },
      //   { 'action': 'Edit...', done: true },
      //   { 'action': 'Delete...', done: false }
      // ]
    })
    .controller ('Todo', Todo)
    .filter ('checkedItems', checkedItems)
    .directive('taskList', taskList);

    function runApp($http, model) {
      $http 
      .get('json/todo.json')
      .success(function(data) {
        model.items = data;
      });
    }

  //public API
  function Todo($scope, model) {
    $scope.todo = model;
    $scope.addNewItem = addNewItem;
    //$scope.showComplete = true;
    //console.log(model);
    $scope.incompleteCount = incompleteCount;
    $scope.warningLevel = warningLevel;

    //implementation
    function addNewItem(items, newItem) {
      if(newItem && newItem.action) {
        items.push({
          action: newItem.action,
          done: false
        });
        newItem.action = " ";
      }
    }

    function incompleteCount(items) {
      var count = 0;
      angular.forEach(items, function(itm) {
        if(!itm.done) {
          count++;
        }
      });
      return count;
    }

    function warningLevel(items){
      
      return incompleteCount(items) < 3 ? "label-success" : "label-warning";
      // return function incompleteCount(items) {
      //   if (items<3) { 
      //     "label-success";
      //   }else {
      //     "label-warning";
      //   }
      // };
    }
  }

  //filters

  function checkedItems() {
    return function(items, showComplete) {
      var resArr = [];

      if(angular.isArray(items)) {
        angular.forEach(items, function(itm) {
          if (itm.done===false || showComplete===true) {
            resArr.push(itm);
          }
        });

        return resArr;
      } else {
        return items;
      }
    };

  }

  //directives
  function taskList() {
    return {
      restrict: 'A',
      templateUrl: './html/table.html'
    };
  }


})();