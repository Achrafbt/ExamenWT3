angular.module('8ball.controllers', [])
.controller("eightball",function($scope){

  //array of possible answers to choose from
$scope.possibleAnswers =
[
  "Signs point to yes",
  "Yes",
  "Reply hazy, try again",
  "Without a doubt",
  "My sources say no",
  "As I see it, yes",
  "You may rely on it",
  "Concentrate and ask again",
  "Outlook not so good",
  "It is decidedly so",
  "Better not tell you now",
  "Very doubtful",
  "Yes - definitely",
  "It is certain",
  "Cannot predict now",
  "Most likely",
  "Ask again later",
  "My reply is no",
  "Outlook good",
  "Don't count on it"
];

//decides whether to show the answer or not; by default the answer is hidden
$scope.showAnswerVar = false;

//function that shows the answer;
$scope.showAnswer = function(){
        //only start showing the answer if it's not already visible
    if (!$scope.showAnswerVar){
        $scope.showAnswerVar=true;

                //choose an answer to display
        $scope.answer = $scope.possibleAnswers[Math.floor(Math.random() * $scope.possibleAnswers.length) ];

                //after 5 seconds hide the answer
        setTimeout($scope.hideAnswer, 5000);
    }
}

    //function to hide the answer
$scope.hideAnswer = function(){
    $scope.showAnswerVar=false;

        //this is necessary because by
        //using setTimeout we stepped out of the AngularJS life cycle
    $scope.$apply();
}
 }
);
