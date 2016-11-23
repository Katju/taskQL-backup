angular
    .module('taskQL')

    .controller('registrationController', function($scope){

    })

    .controller('loginController', function(Login, $scope, $rootScope, $location) {
<<<<<<< HEAD
    	$scope.login = function(){ 
    		Login.getLogin($scope.username, $scope.password).then(function(response){
    			$rootScope.loginResponse = response.data;
    			$rootScope.sessionToken = response.data.SessionToken;
    		    $location.path('dashboard');
    		    Login.getAll($rootScope.sessionToken).then(function(response){
    		        $rootScope.getAllResponse = response.data;

    	        }).catch(function(response){
    	            //request was not successful
    	            //handle the error
    	        });	
    		    
	        }).catch(function(response){
	            //request was not successful
	            //handle the error
	        });
    	}	
    })
     
    .controller('dashboardController', function($scope) {
    	
    })

    .controller('projecteditorController', function($scope){
        
    })

 .controller('nuBeController', function ($scope, $ionicModal) {

     $ionicModal.fromTemplateUrl('templates/nutzungsbedingungen.html', {
         scope: $scope,
         animation: 'side-in-up',
     }).then(function (modal) {
         $scope.modal = modal;
     });

     $scope.openModal = function () {
         $scope.modal.show();
     };

     $scope.closeModal = function () {
         $scope.modal.hide();
     };

     $scope.$on('$destroy', function () {
         $scope.modal.remove();
     });
 });

=======
    	
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
    
    })

    .controller('nuBeController', function($scope, $ionicModal){

        $ionicModal.fromTemplateUrl('templates/nutzungsbedingungen.html', {
            scope: $scope,
            animation: 'side-in-up',
        }).then(function(modal){
            $scope.modal = modal;
        });

        $scope.openModal = function(){
            $scope.modal.show();
        };

        $scope.closeModal = function(){
            $scope.modal.hide();
        };

        $scope.$on('$destroy', function(){
            $scope.modal.remove();
        });
    });

   
    
>>>>>>> origin/master

    