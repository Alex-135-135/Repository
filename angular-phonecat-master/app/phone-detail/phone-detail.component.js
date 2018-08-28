'use strict';
console.log(JSON.parse(localStorage.getItem('basketData')));
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['Phone', function BasketListController() { }]
  })
  .controller('deleteFromBasket', $scope => {
    $scope.phones = JSON.parse(localStorage.getItem('basketData'))
    if($scope.phones.length==0){
        $scope.qwert= 'Корзина пуста';
    }

    $scope.deleteFromBasket = id => {
      $scope.phones = $scope.phones.filter(i => i.id !== id);
      if($scope.phones.length==0){$scope.qwert= 'Корзина пуста';}
      localStorage.setItem('basketData', JSON.stringify($scope.phones));
      toastr.success('Товар видалено корзини');
    } 
     $scope.addGoods = id => {
      let arr = $scope.phones.filter(i => i.id == id);
      arr[0].count++;
      localStorage.setItem('basketData', JSON.stringify($scope.phones));
    } 
    $scope.deleteGoods = id => {
      let arr = $scope.phones.filter(i => i.id == id);
      arr[0].count>1 ? arr[0].count-- : arr[0].count;
      localStorage.setItem('basketData', JSON.stringify($scope.phones));
    } 
  });
