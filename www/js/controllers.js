angular
.module('taskQL')
.controller('mainController', function(mainFactory, $scope, $rootScope, $location, $ionicPopup, $ionicHistory, $ionicSideMenuDelegate) {
	
	$scope.login = function(){
		
		var url = 'https://alpha.taskql.com/rest/api/1/taskql/login';
		var loginData = JSON.stringify({
			username : $scope.username,
			password : $scope.password
		});
		
		mainFactory.getLoginReq(url, loginData).then(function(response){

			$rootScope.loginResponse = response.data;
			$rootScope.sessionToken = response.data.SessionToken;
			$scope.getAllProjects();
			$location.path('dashboard');

		}).catch(function(response){
			// request was not successful
			// handle the error
		});
	}
	
	$scope.getAllProjects = function(){
		
		var url = 'https://alpha.taskql.com/rest/api/1/project/getAll';
		mainFactory.genericReq($rootScope.sessionToken, "GET", url, null).then(function(response){
			
			$rootScope.getAllRes = response.data;
			
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
				var url = 'https://alpha.taskql.com/rest/api/1/project/rename';
				var request = JSON.stringify({
					projectid : projectID,
					renameprojecttitle : res
				});

				mainFactory.genericReq($rootScope.sessionToken, "PUT", url, request);
				$scope.getAllProjects();
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
				var url = 'https://alpha.taskql.com/rest/api/1/project/add';
				var request = JSON.stringify({
					addprojecttitle : res
				});

				mainFactory.genericReq($rootScope.sessionToken, "POST", url, request);
				$scope.getAllProjects();
			}
		});
	}
	
	$scope.deleteProject = function(projectID, projectTitle){

		var deletePopup = $ionicPopup.confirm({

			title: 'Delete ' + projectTitle,
			template: 'Are you sure you want to delete the project?'
		
		}).then(function(res) {

			if(res) {
				var url = 'https://alpha.taskql.com/rest/api/1/project/delete/' + projectID;
				mainFactory.genericReq($rootScope.sessionToken, "DELETE", url, null);
				$scope.getAllProjects();
			}
		});
	}
	
	$scope.getAllSubprojects = function(projectID){
		
		$rootScope.selectedID = projectID;
		$scope.getProjectInfo();
		$location.path('dashboard_subproject');
	}
	
	$scope.getProjectInfo = function(){

		var url = 'https://alpha.taskql.com/rest/api/1/project/getInfoById/' + $rootScope.selectedID;
		mainFactory.genericReq($rootScope.sessionToken, "GET", url, null).then(function(response){

			$rootScope.getProjectInfoRes = response.data;

		}).catch(function(response){
			// request was not successful
			// handle the error
		});
	}
	
	$scope.renameSubproject = function(subprojectIDEX, subprojectTitle){

		var renameInput = $ionicPopup.prompt({

			title: 'Rename Subproject',
			template: 'Enter new name',
			inputType: 'text',
			inputPlaceholder: subprojectTitle

		}).then(function(res) {

			if(res) {
				var url = 'https://alpha.taskql.com/rest/api/1/subproject/rename';
				var request = JSON.stringify({
					projectid: $rootScope.selectedID,
					idex: subprojectIDEX,
					title: res
				});

				mainFactory.genericReq($rootScope.sessionToken, "PUT", url, request);
				$scope.getProjectInfo();
			}
		});
	}

	$scope.addSubproject = function(){

		var addInput = $ionicPopup.prompt({

			title: 'Add Subproject',
			template: 'Enter new Subproject name',
			inputType: 'text',

		}).then(function(res) {

			if(res) {	
				
				var url = 'https://alpha.taskql.com/rest/api/1/subproject/add/' + $rootScope.selectedID;
				var request = JSON.stringify({
					addsubprojecttitle : res
				});

				mainFactory.genericReq($rootScope.sessionToken, "POST", url, request);
				$scope.getProjectInfo();
			}
		});
	}
	
	$scope.deleteSubproject = function(subprojectIDEX, subprojectTitle){

		var deletePopup = $ionicPopup.confirm({

			title: 'Delete ' + subprojectTitle,
			template: 'Are you sure you want to delete the subproject?'
		
		}).then(function(res) {
			
			if(res) {
				
				var url = 'https://alpha.taskql.com/rest/api/1/subproject/delete/' + $rootScope.selectedID + '/' + subprojectIDEX;
				mainFactory.genericReq($rootScope.sessionToken, "DELETE", url, null);
				$scope.getProjectInfo();
			}
		});
	}
	
	$scope.openSubproject = function(subprojectIDEX, subprojectTitle){

		var url = 'https://alpha.taskql.com/rest/api/1/subproject/getInfoByIdEx/' + subprojectIDEX;
		mainFactory.genericReq($rootScope.sessionToken, "GET", url, null).then(function(response){

			$rootScope.getSubprojectInfoRes = response.data;
			$rootScope.editorText = $rootScope.getSubprojectInfoRes.text;
			$location.path('projecteditor');

		}).catch(function(response){
			// request was not successful
			// handle the error
		}); 
	}
	
	$scope.aceLoaded = function(editor) {
	    // Options
	    editor.setReadOnly(false);
	    editor.setValue($rootScope.editorText, 1);
	}

	$scope.back = function(){
		$ionicHistory.goBack()
	}

	$scope.toggleRight = function(){
		$ionicSideMenuDelegate.toggleRight();
	}
	
})

.controller('registrationController', function($scope, mainFactory, $rootScope) {

	$scope.register = function () {
		var url="https://alpha.taskql.com/rest/api/1/taskql/register";
		var request = JSON.stringify({
             mailaddr: $scope.username,
             password: $scope.password,
             license: $scope.license,
             upgradeLic: ""
		});
		console.log(request);
		mainFactory.genericReq($rootScope.sessionToken, "GET", url, request).then(function(response){
			
		$rootScope.getAllRes = response.data;
		console.log(JSON.stringify(response.data));
		}).catch(function(response){
			// request was not successful
			// handle the error
		});
}})

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