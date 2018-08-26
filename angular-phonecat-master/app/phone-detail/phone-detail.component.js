'use strict';
// Register `phoneDetail` component, along with its associated controller and template
// Зареєструйте компонент `phoneDetail` разом із відповідним контролером і шаблоном
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        var a=JSON.parse(localStorage.getItem('Data'));
        this.phones = a
        this.orderProp = 'age';
        //console.log(a);
      }
    ]
  })
    .controller('Delete', function($scope) {
    $scope.Delete = function(id){
      var a=JSON.parse(localStorage.getItem('Data'));
      console.log(a);
      console.log(id);
      for (var i = 0; i < a.length; i++) {
    if(a[i]==id){
          console.log('ffsfsre')
        }
      }
          
      
    }
});