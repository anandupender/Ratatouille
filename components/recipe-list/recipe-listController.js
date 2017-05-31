'use strict';

cs142App.controller('RecipeListController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Users';

	    $scope.FetchModel("/recipe/list", function (model){
        	$scope.$apply(function () {
	            $scope.main.users = model;
	            console.log(model);
	            $scope.main.toolbarRight = "List of Users";

	        });
    	});
    }]);

