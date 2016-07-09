angular.module("myApp",["ngRoute"]);
angular.module("myApp").config(function($routeProvider){
	
	$routeProvider.when("/Employes",{

		templateUrl:"view/Employes.html",
		controller:"EmployeesCtrl"

	})
	        
	.when("/Employes/:EmployeId",{
 
		templateUrl:"view/single-Employe.html",
		controller:"SingleEmployeCtrl"

	})

	.when("/Employes/:EmployeId/Edit",{
 
		templateUrl:"view/edit-book.html",
		controller:"EditEmployeCtrl"

	})

	
	.when("/createEmploye",{
 
		templateUrl:"view/create-Employe.html",
		controller:"CreateEmployeCtrl"

	})
	
});

