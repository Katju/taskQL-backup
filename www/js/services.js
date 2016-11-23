angular
    .module('taskQL')
    .factory('Login', function($http) {
    	return{
    	    getLogin: function(usernameInput, passwordInput) {
    	    	var url = 'https://alpha.taskql.com/rest/api/1/taskql/login';
    			var loginData = JSON.stringify({username: usernameInput, password: passwordInput});
<<<<<<< HEAD
    			
    			return $http.post(url, loginData, { cache: true});
    	    },
    		getAll: function(sessionToken){
    			var url = 'https://alpha.taskql.com/rest/api/1/project/getAll';
    			console.log(sessionToken);
    			return $http({
    				method: 'GET',
     		        url: url,
     		        headers: {
     		        	SessionToken: sessionToken
     		        }
    			})
    		}
    	}
	 })
	
=======
  
    			return $http.post(url, loginData);
    	    }
    	};
    })
    .factory('RestGet', function($http) {
    		return {
    			getRestGet: function(restGetUrl) {
    				var url='https://alpha.taskql.com/rest/api/1/project/getAll';
					return $http.get(restGetUrl);
				}
	 };
	 });
    		;
>>>>>>> origin/master
