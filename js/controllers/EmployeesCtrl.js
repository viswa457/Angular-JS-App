angular.module("myApp")
.controller("EmployeesCtrl",function($scope,$http,$routeParams){

    $http.get('http://jsonplaceholder.typicode.com/users')
         .success(function(res){
         	$scope.Employes = res;
         });

/*
   $scope.books=[
    
   {name:"java"}
   ];
  */  
});