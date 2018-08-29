'use strict';

//let api = "https://fcc-weather-api.glitch.me/api/current?";
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
  .controller('deleteFromBasket', $scope => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = "lat=" + position.coords.latitude;
          let lon = "lon=" + position.coords.longitude;
          getWeather(lat, lon);
          console.log(lat + "Component" +lon);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }

function getWeather(lat, lon) {
  let urlString = "http://api.openweathermap.org/data/2.5/weather?cnt=5&" + lat + "&"+ lon + "&units=metric&APPID=236612a7763329b46b2c67a6cb5f6455";
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
      console.log(result);
    }
  });
}

  });

