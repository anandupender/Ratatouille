'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/recipes', {
                templateUrl: 'components/recipe-list/recipe-listTemplate.html',
                controller: 'RecipeListController'
            }).
            when('/recipes/:userId', {
                templateUrl: 'components/recipe-detail/recipe-detailTemplate.html',
                controller: 'RecipeDetailController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/recipe-photos/recipe-photosTemplate.html',
                controller: 'RecipePhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.controller('MainController', ['$scope', '$location','$routeParams',
    function ($scope, $location, $routeParams) {
        $scope.main = {};
        $scope.main.title = 'Recipes';
        $scope.main.urlPath = $location.path();
        $scope.main.currRecipe = '';
        $scope.main.currTemp = 0;
        $scope.main.timer = 0;
        $scope.main.targetTemp = 0;
        $scope.main.laser = 0;

        $scope.main.userID = '';

        $scope.FetchModel = function(url, doneCallback) {
            var xhr = new XMLHttpRequest();
            function xhrHandler() {
                if (xhr.readyState!== 4){ 
                    return; 
                }
                if (xhr.status !== 200) {
                    return;
                }
                var text = JSON.parse(xhr.responseText);
                doneCallback(text);
            }
            xhr.onreadystatechange = xhrHandler;
            xhr.open("GET", url);
            xhr.send();
        };
        
        $scope.FetchModel("/test/info", function (model){
            $scope.$apply(function () {
                $scope.main.version = model.__v;
            });
        });
    }]);
