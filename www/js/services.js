angular
    .module('taskQL')
    .factory('Login', function($http) {
    	return{
    	    getLogin: function(usernameInput, passwordInput) {
    	    	var url = 'https://alpha.taskql.com/rest/api/1/taskql/login';
    			var loginData = JSON.stringify({username: usernameInput, password: passwordInput});
  
    			return $http.post(url, loginData);
    	    }
    	}
    });
