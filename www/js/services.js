
angular
    .module('taskQL')
    .factory('Login', function($scope, $http) {
        var dataSource = 'https://alpha.taskql.com/rest/api/1/taskql/login';
		var loginData = JSON.stringify({username: $scope.username, password: $scope.password});
		$http.post(dataSource, data).
		success(function(dataSource, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		  
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
        return {
        	
        }
    });
