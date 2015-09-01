angular.module('8ball.controllers', [])
.controller("eightball",function($scope){

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

$scope.showAnswerVar = false;

$scope.showAnswer = function(){
    if (!$scope.showAnswerVar){
        $scope.showAnswerVar=true;

        $scope.answer = $scope.possibleAnswers[Math.floor(Math.random() * $scope.possibleAnswers.length) ];
        setTimeout($scope.hideAnswer, 2500);
    }
}
$scope.hideAnswer = function(){
    $scope.showAnswerVar=false;
    $scope.$apply();
}
});
