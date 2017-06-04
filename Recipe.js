
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

var currRecipe;

function Recipe(myRecipe, id, stepCounter){
	this.myRecipe = recipes[myRecipe];
	this.id = id;
	this.stepCounter = 0;
	console.log("Created new Recipe");
}

Recipe.prototype.render = function(){
  currRecipe = this;
	console.log(this.myRecipe);
	var newRecipe = document.getElementById("newRecipe");
	console.log("newRecipe: ", newRecipe);

  var elements = document.getElementsByClassName("step");
  console.log("divs: ", elements);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    var step = document.createElement('div');
    step.innerHTML = this.myRecipe.steps[this.stepCounter].text;
    step.className = "step";
    console.log("long: ", this.myRecipe.steps[this.stepCounter].text);
    newRecipe.appendChild(step);

};

function nextStep(){
	if(currRecipe.stepCounter < currRecipe.myRecipe.steps.length - 1){
        currRecipe.stepCounter++;
    }
   	var step = document.getElementById("step");
    var elements = document.getElementsByClassName("step");
    elements[0].innerHTML = currRecipe.myRecipe.steps[currRecipe.stepCounter].text;

    // if($scope.main.timer > 0){
    //     setTimeout(function(){ 
    //     alert("Timer is up, ready for next step");
    //     }, $scope.main.timer*1000*60);   //increment to next step after timer
    // }

};

function prevStep(){
  if(currRecipe.stepCounter > 1){
    currRecipe.stepCounter--;
  }
  var step = document.getElementById("step");
  var elements = document.getElementsByClassName("step");
  elements[0].innerHTML = currRecipe.myRecipe.steps[currRecipe.stepCounter].text;

};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

function fillSidebar(){
  recipes.forEach(function callback(element, counter, array){
      var sidebar = document.getElementById("mySidenav");
      var recipeLink = document.createElement("button");
      recipeLink.innerHTML = element.name;
      recipeLink.addEventListener("click", function changeRecipe(){
        console.log("clicked");
        newRecipe = new Recipe(counter, 001, 0); //recipenum, recipe id, step counter var
        console.log("index: ", counter);
        newRecipe.render();
        console.log("CHANGING RECIPE");
      }, false); 
      //where func is your function name
      //recipeLink.onclick = changeRecipe(counter);
      sidebar.appendChild(recipeLink);
  });
      console.log("recipe list: ", recipes)
}

fillSidebar();

