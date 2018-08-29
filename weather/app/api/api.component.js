'use strict';

let lat, lon;
let tempUnit = 'C';
let currentTempInCelsius;

angular.
  module('api').
  component('api', {
    templateUrl: 'api/api.template.html',
    controller: ['Phone',
      function PhoneListController() { }]
  })
  .controller('deleteFromBasket', ($scope, $http, $timeout) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = "lat=" + position.coords.latitude;
          let lon = "lon=" + position.coords.longitude;
           $scope.getWeather(lat, lon);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }

    $scope.getWeather = (lat, lon) => {
    let urlString = "http://api.openweathermap.org/data/2.5/weather?cnt=5&" + lat + "&"+ lon + "&units=metric&APPID=f6c490f5420f241b364e02736ca2a3da";
        $http({method: 'GET', url: urlString}).
              then( $scope.success = response => {
                  $scope.city = (response.data.name + ", ");
                  $scope.country = response.data.sys.country;
                  currentTempInCelsius = Math.round(response.data.main.temp * 10) / 10;
                  $scope.temp = currentTempInCelsius + " " + String.fromCharCode(176);
                  $scope.tempunit = tempUnit;
                  $scope.desc = "//openweathermap.org/img/w/"+response.data.weather[0].icon+".png";
          });
  } 
  });
