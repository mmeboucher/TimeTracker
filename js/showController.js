
//var timeTrackerControllers = angular.module('timeTrackerControllers', []);
//timeTrackerApp.controller("ShowController", ShowController);


timeTrackerControllers.controller('ShowController', ['$scope',
  '$rootScope',
    function ShowController($scope, $rootScope) {
    	$scope.pageClass = "page-main";
        $scope.message = "You are on Main Page";





        $rootScope.msg = "rootScope msg now changed";
        $rootScope.$apply(); 

  //      console.log("rootscope changed msg = " + $rootScope.msg);


//nameApp.controller('MainCtrl', function ($scope){

  $scope.categories = $rootScope.categories;

$scope.ratingValue1 = "neutral";
$scope.ratingValue2 = "enjoy it a lot";
$scope.ratingValue3 = "hate it";

      
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

$scope.colors = [
    {imageurl: 'img/beigenoise.jpg', displayWidth: '50%'}, 
    {imageurl: 'img/bluenoise.jpg', displayWidth: '30%'} 
  ];



$scope.add_portfolio_error = "";
$scope.control= {};
$scope.cnt = 0;
$scope.legendcnt = 0;
$scope.mySwitch = "1";
$scope_blank_it_switch = "0";
$("#alertBox").removeClass("alert-success");


 //if ($scope_blank_it_switch = "1") {
//    $scope.add_portfolio_error = "";

 //};

/************************************************/

$scope.addEntry = function(any_name) {

// check for valid date 

//findVals();

$("#alertBox").removeClass("alert-success");

var date_entered = $scope.control.date;
console.log("date entered is = " + date_entered);


 if (date_entered === undefined ){
        $scope.add_portfolio_error = "Pls. choose a valid date";
        return;} else {
        $scope.add_portfolio_error = "";
    }


if (($scope.categories.length + 1) > 14) { 

        $scope.add_portfolio_error = "too many entries";
        return;
      }

//check for hours entered - new code here

  var inputHours = $scope.adding_entry.hours;
  var inputx = $scope.adding_entry.goal;

if (inputx) {

 // console.log("inputHours = " + inputHours);

  if (inputHours < .1 || inputHours > 24) {
    $scope.add_portfolio_error = "Number of hours must be >0 or <24";
    return;

  }

      if (inputHours === undefined ) {
         $scope.add_portfolio_error = "Pls. enter hours for this activity..";
         return;

      }

    if (!inputHours.match(/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/)){
        $scope.add_portfolio_error = "Pls. correct number of hours";
    return;
}

} //end of if inputx 

/*
Explanation of the regex:

/^-?(\d+.?\d*)$|(\d*.?\d+)$/

The initial "^" and the final "$" match the start and the end of the string, to ensure the check spans the whole string.
The "-?" part is the minus sign with the "?" multiplier that allows zero or one instance of it.
Then there are two similar groups, delimited by parenthesis. The string has to match either of these groups. The first matches numbers like 5. and the second .5
The first group is

\d+.?\d*

The "\d+" matches a digit (\d) one or more times.
The "\.?" is the decimal point (escaped with "\" to devoid it of its magic), zero or one times.
The last part "\d*" is again a digit, zero or more times.
All the parts are optional but the first digit, so this group matches numbers like 5. and not .5 which are matched by the other half.



*/


// check for dupes

      var input = $scope.adding_entry.goal;
      if (input)
      var inputUpperCase = input.toUpperCase();

      console.log ("user entered = " + input); 
      console.log($scope.categories.length);


      for (var i = 0; i < $scope.categories.length; i++){

        console.log("in addEntry i = " + i);

        for (var prop in $scope.categories) {
          var temp = $scope.categories[i]["goal"];
          var tempUpperCase = temp.toUpperCase();

          if (tempUpperCase == inputUpperCase){
            console.log("duplicate found " + input);
            $scope.add_portfolio_error = input + " is a duplicate - pls. correct ";

          return;
        }

      }; //end of for v prop
  };   // end of for var i

// if not a dupe, add new entry to array ======

      if ($scope.myform.$valid){
       $scope.categories.push(any_name);
//     $scope.categories.push(inputUpperCase); // a primitive
       console.log($scope.categories);
//        console.log('valid form');
        $scope.adding_entry = {};

 $rootScope.categories = $scope.categories;
 // $rootScope.$apply(); 

  console.log($rootScope.categories);



        $("#alertBox").addClass("alert-success");

        $scope.add_portfolio_error = "Activity successfully added !";

 //       $scope.add_portfolio_error = "";
        $scope.legendcnt = 0;
        $scope.visual1 = "true";
        $scope.visual2 = "true";

      }
      else {
        console.log('invalid form');
        $scope.add_portfolio_error = "blank or invalid entry";
        return false;
      };

};  //end of addEntry

/************************************************/

$scope.removeName = function(name) {

 // $("#alertBox").removeClass("alert-success");
//clearMsg();

  var i = $scope.categories.indexOf(name);
  $scope.categories.splice(i, 1);
  $scope.legendcnt = 0;
  $scope.visual1 = "true";
  $scope.visual2 = "true";

  $("#alertBox").addClass("alert-success");
  $scope.add_portfolio_error = "Activity successfully deleted !";


 $rootScope.categories = $scope.categories;
 // $rootScope.$apply(); 

  console.log($rootScope.categories);


};

/************************************************/

$scope.updateEntry = function(name, time, comments, rating) {

 // $("#alertBox").removeClass("alert-success");

 //       $scope.add_portfolio_error = "";


  if (time == 0 || time == "undefined"){

        $scope.add_portfolio_error = "Pls. correct update hours";
        return false;
      }

  if (!time.match(/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/)){
        $scope.add_portfolio_error = "Pls. enter valid number of hours";
    return;
}


if (time < .1 || time > 24) {
    $scope.add_portfolio_error = "Number of hours must be >0 or <24";
    return;

  }

      console.log("right before updating entry !!!" + time);
        var y = $scope.categories.indexOf(name);
        var tempx = $scope.categories[y]["goal"];
        var inputHoursx = time;
        $scope.categories[y]["hours"] = time;
        if (!comments == "undefined")
          $scope.categories[y]["comments"] = comments;

        $("#alertBox").addClass("alert-success");

        $scope.add_portfolio_error = "Activity successfully updated !";


        $scope_blank_it_switch = "1";

/* none of these work to clear the input field
      $scope.entered_time = "";

      $scope.time = " ";
      $scope.$apply();
      entered_time = " ";
      time = " ";
      $scope.mytestform.entered_time = {};
      $scope.mytestform.entered_time.$setPristine();
    console.log("entered_time = " + entered_time + "time = " + time);
*/

console.log("updating entry !!!" + y + " " + tempx + " " + inputHoursx);

  $rootScope.categories = $scope.categories;
//  $rootScope.$apply(); 

  console.log($rootScope.categories);

 };

/************************************************/

$scope.checkDate = function() {

// check for valid date 

$scope.add_portfolio_error = "";

var date_entered = $scope.control.date;
console.log("date entered is = " + date_entered);

 if (date_entered === undefined ){
        $scope.add_portfolio_error = "Pls. choose a valid date";
        return;} else {
        $scope.add_portfolio_error = "";
    }
};

/************************************************/
$scope.clearMsg = function() {

// check for valid date 

$scope.add_portfolio_error = "";
$("#alertBox").removeClass("alert-success");




};

/************************************************/

$scope.resetAll = function() {

$scope.cnt = 0;
$scope.showElement = !$scope.showElement;

if 
  ($scope.showElement2) {

    $scope.showElement2 = !$scope.showElement2;

  };
  
 /* 
if 
  ($scope.showElement3) {

    $scope.showElement3 = !$scope.showElement3;

  };

*/
$scope.visual1 = "true";

$scope.visual2 = "false";
$scope.visual3 = "false";
console.log("scope visual2 = " + $scope.visual2);


};

$scope.resetAll2 = function() {

$scope.cnt = 0;
$scope.showElement2 = !$scope.showElement2;

if 
  ($scope.showElement) {

    $scope.showElement = !$scope.showElement;

  };

/*
if 
  ($scope.showElement3) {

    $scope.showElement3 = !$scope.showElement3;

  };

*/

$scope.visual1 = "false";
$scope.visual2 = "true";
$scope.visual3 = "false";

console.log("scope visual2 = " + $scope.visual2);

    };

$scope.resetAll3 = function() {
$scope.cnt = 0;

$scope.legendcnt = $scope.legendcnt +1;  


//if ($scope.legendcnt > 1 ){
 // return} ;

$scope.showElement3 = !$scope.showElement3;


if 
  ($scope.showElement) {

    $scope.showElement = !$scope.showElement;

  };
if 
  ($scope.showElement2) {

    $scope.showElement2 = !$scope.showElement2;

  };


$scope.visual1 = "false";
$scope.visual2 = "false";
$scope.visual3 = "true";
console.log("scope visual3 = " + $scope.visual3);
};



$scope.computeCSS = function(item) {
 //    for (var i = 0; i < $scope.categories.length; i++){
 //   mySwitch = "1";
if ($scope.cnt >= ($scope.categories.length)) { 
            $scope.mySwitch = "0"};

    
do {
          console.log("in computeCSS scope.cnt = " + $scope.cnt);
          console.log("scope.categories.length = " + $scope.categories.length);

            
          for (var prop in $scope.categories) {
           
              var newWidth = $scope.categories[$scope.cnt]["hours"];
              var newHeight = $scope.categories[$scope.cnt]["hours"];
          
           if ($scope.visual3 == "true") {

              newWidth = '90';
              newHeight = '50';
  //            $scope.visual3 = "false";
            }
          

           else if ($scope.visual1 == "true") {

              newWidth = newWidth * 25;
              newHeight = 200;
            }

    else {
           ($scope.visual2 == "true") 

              newWidth = 100;
              newHeight = newHeight * 30;
            }


              var newColor = $scope.colorArray[$scope.cnt]["colorCode"]; 
              console.log("new color is = " + newColor);
 
 //           var newColor = $scope.categories[$scope.cnt]["color"];
 //       console.log("hours = " + $scope.categories.hours);
            console.log("newWidth = " + newWidth);
          $scope.cnt = $scope.cnt + 1;
          console.log ("scope.cnt = " + $scope.cnt);
   
            return { 
            width: newWidth + "px",
            float: 'left',
            height: newHeight + "px",
            'background-color': newColor
            };
 
          }; //end of for v prop
        }
    while ($scope.mySwitch == "1");

};//end of computeCSS


    
/******************************/



//});   //end of controller the old syntax 

    }]);//end of ShowController new syntax



//looks like this is not necessary??

























