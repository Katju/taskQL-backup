angular
    .module('taskQL')
    .controller('loginController', function(Login, $scope, $rootScope, $location) {
    	
    	$scope.login = function(){ 
    		Login.getLogin($scope.username, $scope.password).then(function(response){
    			$rootScope.loginResponse = response.data;
    		    $location.path('dashboard');
	        }).catch(function(response){
	            //request was not successful
	            //handle the error
	        });	
    	}	
    })
     
    .controller('dashboardController', function(Login, $scope) {
    	
    })

    .controller('projecteditorController', function($scope){

        
    });