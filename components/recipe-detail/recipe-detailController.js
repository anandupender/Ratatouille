'use strict';

cs142App.controller('RecipeDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    $scope.main.currStepCounter = null;
    $scope.main.currStep = '';
    $scope.main.totalSteps;

    $scope.FetchModel("/recipe/" + userId, function (model){
        $scope.$apply(function () {
            $scope.main.currRecipe = model;
            $scope.main.totalSteps = $scope.main.currRecipe.steps.length;
            $scope.main.currStep = $scope.main.currRecipe.steps[$scope.main.currStepCounter];
        });
    });

    if($scope.main.currStepCounter === null){
        $scope.main.currStepCounter = 0;
    }


    $scope.increment = function(){
            if($scope.main.currStepCounter < $scope.main.totalSteps - 1){
                $scope.main.currStepCounter++;
            }
            $scope.main.currStep = $scope.main.currRecipe.steps[$scope.main.currStepCounter];
            $scope.main.timer = $scope.main.currStep.time;
            $scope.main.targetTemp = $scope.main.currStep.temp | 0;
            if($scope.main.timer > 0){
                setTimeout(function(){ 
                //increment();
                alert("Timer is up, ready for next step");
                }, $scope.main.timer*1000*60);   //increment to next step after timer
            }
    }

    $scope.decrement = function(){
            if($scope.main.currStepCounter > 1){
                $scope.main.currStepCounter--;
            }
            $scope.main.currStep = $scope.main.currRecipe.steps[$scope.main.currStepCounter];
            $scope.main.timer = $scope.main.currStep.time;
            $scope.main.targetTemp = $scope.main.currStep.temp | 0;
            if($scope.main.timer > 0){
                setTimeout(function(){ 
                //decrement();
                alert("Timer is up, ready for next step");
                }, $scope.main.timer*1000*60);   //decrement to next step after timer
            }
    }

  }]);
