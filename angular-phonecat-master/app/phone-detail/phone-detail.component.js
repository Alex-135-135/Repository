'use strict';

// Register `phoneDetail` component, along with its associated controller and template
// Зареєструйте компонент `phoneDetail` разом із відповідним контролером і шаблоном
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });