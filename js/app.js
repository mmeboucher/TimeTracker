var timeTrackerApp = angular.module('timeTrackerApp', 
    [
    'ngRoute', 
    'ngAnimate',
    'timeTrackerControllers' 
    ]);


timeTrackerApp
.run(function($rootScope) {
    $rootScope.msg = "rootscope test";
    $rootScope.categories = {};
    $rootScope.array = [];
    console.log("rootscope test msg = " + $rootScope.msg)
    console.log("rootscope categories = " + $rootScope.categories)
    console.log("rootscope array = " + $rootScope.array)

  $rootScope.categories = [
  {goal: 'Family Time', hours: 5}, 
  {goal:'Daily Chores', hours: 4},
  {goal: 'Learn Web Devpt', hours: 2},
  {goal: 'Gym', hours: 1.5},
  {goal: 'Tennis', hours: 2 },
  {goal: 'Meditate', hours: 1 },
  {goal: 'Read a Book', hours: .5 },
  {goal: 'Sleep', hours: 6 },
  {goal: 'Other', hours: 2 }
];



});

timeTrackerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: 'partials/show.html',
            controller: 'ShowController'
        }).when('/chart', {
            templateUrl: 'partials/chart.html',
            controller: 'ChartController'
        }).otherwise({
            templateUrl: 'partials/404.html',
            controller: 'FourCtrl'
        })
    }]);






























