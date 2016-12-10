angular
	.module('taskQL')
	.controller('mainController', function(mainFactory, $scope, $rootScope, $location, $timeout, $ionicPopup) {
	
		$scope.login = function(){
	
			mainFactory.getLoginReq($scope.username, $scope.password).then(function(response){
	
				$rootScope.loginResponse = response.data;
				$rootScope.sessionToken = response.data.SessionToken;
				$location.path('dashboard');
	
				mainFactory.getAllReq($rootScope.sessionToken).then(function(response){
	
					$rootScope.getAllRes = response.data;
	
				}).catch(function(response){
					// request was not successful
					// handle the error
				});
	
			}).catch(function(response){
				// request was not successful
				// handle the error
			});
		}
	
		$scope.getSubprojects = function(projectID){
<<<<<<< HEAD

=======
	
			request = projectID;
>>>>>>> master
			mainFactory.genericReq($rootScope.sessionToken, "GET", 'https://alpha.taskql.com/rest/api/1/project/getInfoById/', projectID).then(function(response){
	
				$rootScope.getProjectInfoRes = response.data;
				$location.path('dashboard_subproject');
	
			}).catch(function(response){
				// request was not successful
				// handle the error
			}); 
		}
	
		$scope.renameProject = function(projectID, projectTitle){
	
			var renameInput = $ionicPopup.prompt({
	
				title: 'Rename Project',
				template: 'Enter new name',
				inputType: 'text',
				inputPlaceholder: projectTitle
	
			}).then(function(res) {
	
				if(res) {
					var request = JSON.stringify({
						projectid : projectID,
						renameprojecttitle : res
					});
					
					mainFactory.genericReq($rootScope.sessionToken, "PUT", 'https://alpha.taskql.com/rest/api/1/project/rename', request);
					mainFactory.getAllReq($rootScope.sessionToken).then(function(response){
	
						$rootScope.getAllRes = response.data;
	
					}).catch(function(response){
						// request was not successful
						// handle the error
					});
				}
			});
		}
	
		$scope.deleteProject = function(projectID, projectTitle){

			var deletePopup = $ionicPopup.confirm({
				
				title: 'Delete ' + projectTitle,
				template: 'Are you sure you want to delete the project?'
			}).
			
			then(function(res) {
				
				if(res) {
<<<<<<< HEAD
					mainFactory.genericReq($rootScope.sessionToken, "DELETE", 'https://alpha.taskql.com/rest/api/1/project/delete/', projectID);
=======
					mainFactory.genericReq($rootScope.sessionToken, "DELETE", 'https://alpha.taskql.com/rest/api/1/project/delete', projectID);
>>>>>>> master
					mainFactory.getAllReq($rootScope.sessionToken).then(function(response){

						$rootScope.getAllRes = response.data;

					}).catch(function(response){
						// request was not successful
						// handle the error
					});
				}
			});
		}
		
		$scope.addProject = function(){
			
			var addInput = $ionicPopup.prompt({
				
				title: 'Add Project',
				template: 'Enter new project name',
				inputType: 'text',
	
			}).then(function(res) {
				
				if(res) {					
					var request = JSON.stringify({
						addprojecttitle : res
					});
					
					mainFactory.genericReq($rootScope.sessionToken, "POST", 'https://alpha.taskql.com/rest/api/1/project/add', request);
					mainFactory.getAllReq($rootScope.sessionToken).then(function(response){
						
						$rootScope.getAllRes = response.data;
						
					}).catch(function(response){
						// request was not successful
						// handle the error
					});
				}
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