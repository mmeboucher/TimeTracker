
//var timeTrackerControllers = angular.module('timeTrackerControllers', []);


// timeTrackerControllers.controller('FourCtrl', ['$scope',
//   '$rootScope',
//     function FourCtrl($scope, $rootScope) {
//     	$scope.pageClass = "page-chart";
//         $scope.message = "You are on View Page";



timeTrackerControllers.controller('FourCtrl', ['$scope',
    function FourCtrl($scope) {
      $scope.pageClass = "page-404";
        $scope.message = "You ran into a 404 !";
    }]);



//});   //end of controller the old syntax 


//looks like this is not necessary??
//timeTrackerApp.controller("ViewController", ViewController);

























