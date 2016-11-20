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
     
    .controller('dashboardController', function(Login, $scope, $location) {
    	$scope.getRestGetTest = function() {
    		debugger;
    		$location.path('gregorTest'); }
    })

    .controller('projecteditorController', function($scope){

        
    })
    
    .controller('restGetTestController', function(RestGet, $scope, $rootScope, $location) {

    	$scope.restGetTest = function () {
			RestGet.getRestGet($scope.restGetUrl).then(function(response) {
				$rootScope.restGet.response = response.data;
				$rootScope.restGet.url = $scope.restGetUrl;
				$location.path('gregorTestResponse');
    			    		//}
			}).catch(function(response) {
				debugger;
				console.log('response is', JSON.stringify(response));
	//		})
		}
	)}
    
    });

    

    