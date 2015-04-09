
//var timeTrackerControllers = angular.module('timeTrackerControllers', []);


timeTrackerControllers.controller('ChartController', ['$scope',
  '$rootScope',
    function ChartController($scope, $rootScope) {
    	$scope.pageClass = "page-chart";
        $scope.message = "You are on Chart Page";



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

$scope.colorArray = [
  { colorCode: '#F0662E'},
  { colorCode: '#6FCEF1'},
  { colorCode: '#40AF48'},
  { colorCode: '#FEF672'},
  { colorCode: '#E85589'},

//  { colorCode: '#E1DAD2'},

  { colorCode: '#4ed1cb'},

  { colorCode: '#0193b7'},


 
  { colorCode: '#f26964'},

  { colorCode: '#ffd464'},

  { colorCode: '#16a79d'},

  { colorCode: '#f4ac42'},

  { colorCode: '#93b1c6'},

  { colorCode: '#eb65a0'},
  { colorCode: '#00ddd8'}
];

/*

#053E68
#06456F
#06456F
#E1DAD2
#053864
#074674
#E6DFD9
#f26964
#ffd464
16a79d
f4ac42
93b1c6
eb65a0

#F5F5F5
#129793 
#505050 
#FFF5C3 
#9BD7D5 
#FF7260

#B9A593
#B49F8B

#6E5E52
#DB7F2E

art deco
#E49DA5
#A6A5CF
#8FB3CA
#96C492
#C6CACF
#DB798B
#7A8EA1
#7EBFBF
#A39994
#D04451
#18A2AA

gorgeous pastels
#88C5D9
#F0C07A
#E7A7B1
#C5A6C9
#C8C8C8
#11828D
#E29523
#DF8878
#CA2D3A

coolblues/greens/lavender - no reds/yellows
#8DB9D5
#B2A8CF
#64BBE1
#A9D6EA
#A0CDB7
#5A8BA3
#8082B6
#6AABDD
#7EC1D7
#8BC0A3
#7765A0
#195C99
#19A4BC
#49A889

warm terracottas, browns, olives - no blue
#AE7D5E
#EDB797
#F3EAA7
#BCB982
#C6B9B3
#8F613E
#EAAC7C
#E0D372
#948E53
#998693
#5A3806
#E09067
#A5994B
#575C41
#66545B

beach colors
#F7DCA4
#D8D0BA
#D1E1AB
#94CBDA
#64BBE1
#DC8742
#B9A594
#9BBF81
#68B6BE
#19A4D1
#9F3037
#6D5E53
#618544
#1597A3
#0E778F

softest pastels
#C5B9A2
#FCE9B1
#6AB6B3
#A7AFD7
#F5D3D7
#AEAA98
#F4CE98
#C5DAA3
#899BCA
#E3AFC6
#95A7AE
#BB9381
#B1BA88
#72A7C6
#C5A6C9

earth tones
#988F77
#B59973
#EDDA7B
#B0C992
#ADB6BB
#685B4F
#6B4A1E
#C3711A
#678743
#7A8490
#34281F
#472615
#6B310E
#333B1B
#45525C

beige tones - salmon/pink
#EEB9AA
#F4CE98
#EEE0B8
#B1BA88
#A5BAC0
#DB9D83
#E0AD72
#DCC48D
#94A98B
#92A0A7
#965C53
#C48F56
#998D64
#647512
#455261

gray tones - beautiful soft muted - good against black
#7E8EAF
#9BBF81
#C8BE72
#C6BFB7
#D4D3D1
#987AAC
#77A2AB
#D68A62
#A39994
#A6A7A9
#B77D84
#6F9C8B
#A7865D
#776A63
#737278

neutral monotone - very lite sand
#D1C4BE
#D8D0BA
#E8DCAC
#CECBAD
#C5CFD7
#ADA3A4
#C6B9AC
#D5C18D
#BBBB93
#B2BBC3
#998693
#B3A596
#C1AB7C
#A6A381
#9BA4A9

black and white and gray
#29303B
#9BA4A9
#AFBFC3
#5C6A6D
#222323
#050C17
#6D767E
#D6DADD
#7A8A8D
#303535
#21201F
#4F5965
#C6CACF
#95A7AE
#3A4146


#F0662E orange
#6FCEF1 sky bluenoise
#40AF48 green
#FEF672  yellow
#E85589 pink
#E81D2B  red 
#745331  brown
#632D92 purple
#FCCA8F sand
*/


 
$scope.cnt = 0;
$scope.mySwitch = "1";

 $scope.width = 600;
  $scope.height = 250;
  $scope.mybackground = '#43b4cf';
  $scope.newHeight = 0;
  $scope.newWidth = 0;
  $scope.newLeft = 0;


  $scope.yAxis = "Number of Hours";
  $scope.xAxis = "Daily Activities";

  $scope.max = 342;

 
/************************************************/


/************************************************/

$scope.findColor = function(x) {
  console.log("in findColor " + $scope.cnt);

 if ($scope.cnt == 0) {
   $scope.newWidth = $scope.width;
  $scope.newHeight = $scope.height;
  $scope.newLeft = 0;

  }

if ($scope.cnt >= ($scope.categories.length)) { 
            $scope.mySwitch = "0"};



do {
//  height:{{ $scope.graphData[$scope.$index]["hours"] * 40 }}px;
//  var height =  $scope.categories[$scope.cnt].hours * 40;
  var height =  $scope.categories[$scope.cnt]["hours"] * 40;

  var width = ( $scope.width / $scope.categories.length - 5 );
  console.log("width = " + width + "at " + $scope.cnt + "length = " + $scope.categories.length);
 
  var left = ($scope.cnt / $scope.categories.length * $scope.width );
  console.log ("left is calculated at " + left);
 
  $scope.newHeight = height;
  $scope.newWidth = width;
  $scope.newLeft = left;

    $scope.newColor = $scope.colorArray[$scope.cnt]["colorCode"]; 
      console.log("new color is = " + $scope.newColor);
      console.log("new height is = " + $scope.newHeight);
      console.log("new width is = " + $scope.newWidth);
      console.log("new left is = " + $scope.newLeft);
      $scope.cnt +=1;
      console.log($scope.cnt);

 
 return { 
            width: $scope.newWidth + 'px',
            height: $scope.newHeight + 'px',
            left: $scope.newLeft + 'px',
             'background-color': $scope.newColor
            };

} //end of do
    while ($scope.mySwitch == "1");

};//end of findColor



    
/******************************/



//});   //end of controller the old syntax 

    }]);//end of ShowController new syntax

//looks like this is not necessary??
//timeTrackerApp.controller("ShowController", ShowController);

























