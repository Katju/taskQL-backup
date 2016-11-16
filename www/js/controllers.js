
angular
    .module('taskQL')
    .controller('loginController', function($scope, $http) {
    	$scope.sendLoginData = function(){
    		var dataSource = "https://alpha.taskql.com/rest/api/1/taskql/login";
        	var data = {username: $scope.username, password: $scope.password};
        	$http.post(dataSource, data).then(function successCallback(response) {
        		
        		$scope.SessionToken = response.data
        		
        		}, function errorCallback(response) {
        		  // ko
        		});
        };

    });