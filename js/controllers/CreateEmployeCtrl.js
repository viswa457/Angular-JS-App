angular.module("myApp")
.controller("CreateEmployeCtrl",function($scope,$http,$routeParams,$location){

$scope.addBook = function(){

$http.post("http://jsonplaceholder.typicode.com/users",$scope.name)
 .success(function(res){
 	console.log(res)
 	$location.path("/Employes");

 });

};






/*
    $http.get('http://jsonplaceholder.typicode.com/users')
         .success(function(res){
         	$scope.Employes = res;
         });


   $scope.books=[
    
   {name:"java"}
   ];
  */
});