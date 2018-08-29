'use strict';

//let api = "https://fcc-weather-api.glitch.me/api/current?";
let lat, lon;
let tempUnit = 'C';
let currentTempInCelsius;
let data = [];

angular.
  module('api').
  component('api', {
    templateUrl: 'api/api.template.html',
    controller: ['Phone',
      function PhoneListController() { }]
  })
  .controller('deleteFromBasket', ($scope, $http) => {
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
    let urlString = "http://api.openweathermap.org/data/2.5/weather?cnt=5&" + lat + "&"+ lon + "&units=metric&APPID=236612a7763329b46b2c67a6cb5f6455";
        $http({method: 'GET', url: urlString}).
              then(function success(response) {
                  $scope.city = (response.data.name + ", ");
                  $scope.country = response.data.sys.country;
                  currentTempInCelsius = Math.round(response.data.main.temp * 10) / 10;
                  $scope.temp = currentTempInCelsius + " " + String.fromCharCode(176);
                  $scope.tempunit = tempUnit;
                  $scope.desc = "//openweathermap.org/img/w/"+response.data.weather[0].icon+".png"
                  console.log(response.data);
          });
  }
  });
 