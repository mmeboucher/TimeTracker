
var timeTrackerControllers = angular.module('timeTrackerControllers', []);

timeTrackerControllers.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
    	$scope.pageClass = "page-home";
        $scope.message = "Where Does the Time Go?";
    }]);

/*
timeTrackerControllers.controller('ShowController', ['$scope',
    function ShowController($scope) {
    	$scope.pageClass = "page-main";
        $scope.message = "You are on Main Page";
    }]);

*/

timeTrackerControllers.controller('FourCtrl', ['$scope',
    function FourCtrl($scope) {
    	$scope.pageClass = "page-404";
        $scope.message = "You ran into a 404 !";
    }]);




























