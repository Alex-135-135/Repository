'use strict';

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(i) {
        this.phones = i.query();
        this.addInBasket = phone => {
          const arr = JSON.parse(localStorage.getItem('basketData')) || [];
          let current = arr.find(i => i.id === phone.id);
          current ? current.count++ : arr.push({...phone, count: 1});
          localStorage.setItem('basketData', JSON.stringify(arr));
         toastr["success"]("Are you the six fingered man?")
        }
      }
    ]
  });