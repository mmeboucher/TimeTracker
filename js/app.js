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
  {goal: 'Family Time', hours: 4, comments: 'clothes shopping; math homework; lunch at Il Pesce Eataly... delicious grilled octopus & flounder.........', rating: "enjoy it a lot"}, 
  {goal:'Daily Chores', hours: 3, comments: 'grocery shopping - trader joes $76; mrs. greens organic store 32; cvs $45; making thai pork larb for lunch', rating: "hate it"},
  {goal: 'Learn Web Devpt', hours: 2, comments: 'learning angular ng-repeats  - great for simple tasks but can be tricky for more complex processing', rating: "enjoy it a lot"},
  {goal: 'Gym', hours: 1.5, comments: 'elliptical - 30 min; bicep curls 10 lbs 10 reps 3 sets; tricep lifts 5 lbs 10 reps  3 sets; girl-push-ups 10 reps 3 sets', rating: "hate it"},
  {goal: 'Tennis', hours: 2, comments: 'good doubles match with linda, marianna & robin... won 6-2; 4-6; 6-4' , rating: "enjoy it a lot"},
  {goal: 'Qi Gong', hours: .5 , comments: 'brings focus and energy...', rating: "enjoy it a lot"},
  {goal: 'Read a Book', hours: .5 , comments: '"Dirty Old London"....interesting historical tidbits about filthy conditions in Victorian London', rating: "enjoy it a lot"},
  {goal: 'Sleep', hours: 6 , comments: 'Slept very late... need to sleep more...', rating: "neutral"},
  {goal: 'Music', hours: 1 , comments: 'Listened to Dead Can Dance "Into the Labyrinth" - Lisa Gerrard & Brendan Perry have amazing voices...', rating: "enjoy it a lot"}
];

var mydate = new(Date);
$rootScope.today = mydate.toDateString();
console.log("today is = " + $rootScope.today);


}); // end run function


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

        }).when('/view', {
            templateUrl: 'partials/view.html',
            controller: 'ViewController'
        }).otherwise({
            templateUrl: 'partials/404.html',
            controller: 'FourCtrl'
        })
    }]);






























