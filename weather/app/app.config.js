'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/api', {
          template: '<api></api>'
        }).
        when('/phones/#', {
        }).
        otherwise('/api');
    }
  ]);
