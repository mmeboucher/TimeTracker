
//var timeTrackerControllers = angular.module('timeTrackerControllers', []);


timeTrackerControllers.controller('ViewController', ['$scope',
  '$rootScope',
    function ViewController($scope, $rootScope) {
    	$scope.pageClass = "page-chart";
        $scope.message = "You are on View Page";



//nameApp.controller('MainCtrl', function ($scope){

  $scope.categories = $rootScope.categories;

/*
  $scope.categories = [
  {goal: 'Family Time', hours: 5}, 
  {goal:'Daily Chores', hours: 4},
  {goal: 'Learn Web Devpt', hours: 2},
  {goal: 'Gym', hours: 2},
  {goal: 'Meditate', hours: 1 },
  {goal: 'Read a Book', hours: 1 },
  {goal: 'Sleep', hours: 6 },
  {goal: 'Other', hours: 3 }
];
*/



//});   //end of controller the old syntax 

    }]);//end of ViewController new syntax

//looks like this is not necessary??
//timeTrackerApp.controller("ViewController", ViewController);

























