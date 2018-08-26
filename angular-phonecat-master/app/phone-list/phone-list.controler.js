var app = angular.module('myApp', []);
 
            app.controller = ('myCtrl', ['$scope', function($scope){
                $scope.isVisible = false;
                $scope.addQuoteBtn = function(){
                    $scope.isVisible = true;
                }
            }]);