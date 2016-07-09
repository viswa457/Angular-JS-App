angular.module("myApp")
.controller("SingleEmployeCtrl",function($scope,$http,$rootParams){
    
     $http.get('http://jsonplaceholder.typicode.com/users'+id)
         .success(function(res){
         	$scope.Employes = res;
         });

/*
   $scope.books=[
    
   {name:"java"}
   ];
  */

});
