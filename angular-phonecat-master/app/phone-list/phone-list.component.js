'use strict';
var arr=[],i=-1;
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  })
  .controller('myCtrl', function($scope) {
    $scope.myFunc = function(id){
      console.log(id);
      i++;
      arr[i]=id;
      console.log(i);
      localStorage.setItem('Data', JSON.stringify(arr));
    }
});