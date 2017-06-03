'use strict';

 var recipe1 = {_id: "001", name: "Caramelized Onions", steps: [{text: "Ready to make caramelized onions?!", trigger: "gesture"}, 
   {text: "Add oil", trigger: "gesture"}, 
   {text: "Wait for pan to heat", trigger: "temperature", temp: "280"}, 
   {text: "Add onions", trigger: "gesture", }, 
   {text: "Caramelizing. Stir every minute", trigger: "time", time: "8"}, 
   {text: "Remove and serve!", trigger: "gesture"}]};

   var recipe2 = {_id: "002", name: "Chicken & Basil", steps: [{text: "Ready to make Chicken & Basil?!", trigger: "gesture"}, 
   {text: "Add oil", trigger: "gesture"}, 
   {text: "Wait for pan to heat", trigger: "temperature", temp: "300"}, 
   {text: "Add garlic and onions", trigger: "gesture", }, 
   {text: "Cooking. Stir every minute", trigger: "time", time: "6"},
   {text: "Add chicken and soy sauce", trigger: "gesture", }, 
   {text: "Cooking chicken. Stir frequently", trigger: "time", time: "7"},  
   {text: "Remove to a plate and top with basil!", trigger: "gesture"}]};

   var recipes = [recipe1, recipe2];

function Recipe(myRecipe, id, stepCounter){
	this.myRecipe = recipes[myRecipe];
	this.id = id;
	this.stepCounter = 0;
	console.log("Created new Recipe");
}


Recipe.prototype.render = function(){
	console.log(this.myRecipe);
	var body = document.getElementById("newRecipe");
	console.log("body: ", body);
    var step = document.createElement('div');
    step.innerHTML = this.myRecipe.steps[this.stepCounter].text;
    step.id = "step";
    console.log("long: ", this.myRecipe.steps[this.stepCounter].text);
    body.appendChild(step);

};

Recipe.prototype.nextStep = function(){
	if(this.stepCounter < this.myRecipe.steps.length - 1){
        this.stepCounter++;
    }
   	var step = document.getElementById("step");
   	step.innerHTML = this.myRecipe.steps[this.stepCounter].text;

    // $scope.main.currStep = $scope.main.currRecipe.steps[$scope.main.currStepCounter];
    // $scope.main.timer = $scope.main.currStep.time;
    // $scope.main.targetTemp = $scope.main.currStep.temp | 0;
    // if($scope.main.timer > 0){
    //     setTimeout(function(){ 
    //     alert("Timer is up, ready for next step");
    //     }, $scope.main.timer*1000*60);   //increment to next step after timer
    // }

};

Recipe.prototype.prevStep = function(){
	if(this.stepCounter > 1){
        this.stepCounter--;
    }
   	var step = document.getElementById("step");
   	step.innerHTML = this.myRecipe.steps[this.stepCounter].text;

};
