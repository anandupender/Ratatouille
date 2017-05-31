'use strict';

cs142App.controller('RecipePhotosController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    $scope.FetchModel("/photosOfUser/" + userId, function (model){
        $scope.$apply(function () {
            $scope.main.userPhotos = model;
            $scope.main.toolbarRight = "Photos of " + $scope.main.toolbarRight;
        });
    });


  }]);
