
//var timeTrackerControllers = angular.module('timeTrackerControllers', []);

timeTrackerControllers.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
    	$scope.pageClass = "page-home";
        $scope.message = "Where Does the Time Go?";
    }]);


timeTrackerControllers.controller('FourCtrl', ['$scope',
    function FourCtrl($scope) {
    	$scope.pageClass = "page-404";
        $scope.message = "You ran into a 404 !";
    }]);




























