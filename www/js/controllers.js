angular
    .module('taskQL')
    .controller('mainController', function(mainFactory, $scope, $rootScope, $location, $ionicPopup) {
        
        $scope.login = function(){ 
        
            mainFactory.getLogin($scope.username, $scope.password).then(function(response){
                
                $rootScope.loginResponse = response.data;
                $rootScope.sessionToken = response.data.SessionToken;
                $location.path('dashboard');
                
                mainFactory.getAll($rootScope.sessionToken).then(function(response){
                
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
        
        $scope.getSubprojects = function(projectID){
            
            mainFactory.getProjectInfo(projectID, $rootScope.sessionToken).then(function(response){
                
                $rootScope.getProjectInfoResponse = response.data;
                $location.path('dashboard_subproject');

            }).catch(function(response){
                //request was not successful
                //handle the error
            }); 
        }
        
        $scope.renameProject = function(projectID, projectTitle){
        	
        	var inputPopup = $ionicPopup.prompt({
    		   
        		title: 'Rename Project',
        		template: 'Enter new name',
        		inputType: 'text',
        		inputPlaceholder: projectTitle
    		   
        	   	}).then(function(res) {
        		   
        	   		if(res) {
        			   mainFactory.renameProject(projectID, res, $rootScope.sessionToken).then(function(response){
        				
        				   //$rootScope.renameResponse = response.data;

        			   }).catch(function(response){
    		                //request was not successful
    		                //handle the error
        			   }); 
        		   }
        	 });
        }
        
        $scope.addProject = function(projectID){
            
            mainFactory.add(projectID, $rootScope.sessionToken).then(function(response){
                
                $rootScope.getProjectInfoResponse = response.data;
                $location.path('dashboard_subproject');

            }).catch(function(response){
                //request was not successful
                //handle the error
            }); 
        }
    })
     
    .controller('registrationController', function($scope){

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
         })
    })

    