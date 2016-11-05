var app = angular.module("BasicsOfForms", []);

app.controller("BasicsCtrl", ["$scope","$http", function($scope, $http){

    $scope.formSubmit = (event, user) => {
        event.preventDefault();
        var data = $("form").serialize();
        $http.post("/api/AngularApi", data)
        .then(
        console.log(data));
    }

    //$scope.formSubmitJq = function (event) {
    //    $scope.user.email = $("#myform > input[type-email]").val();
    //    $scope.user.password = $("#myform > input[type-password]").val();
    //    $scope.user.passwordvalidation = $("#myform > input[type-passwordvalidation]").val();
    //    $(http.post(
    //        ))

    //}
}]);