angular
    .module('taskQL')

    .controller('registrationController', function($scope){

    })

    .controller('loginController', function(Login, $scope, $rootScope, $location) {
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


    