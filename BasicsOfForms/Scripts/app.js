var app = angular.module("BasicsOfForms", []);

app.controller("BasicsCtrl", ["$scope", function($scope){

    $scope.formSubmit = () => {
        console.log("hi!");
    }

}]);