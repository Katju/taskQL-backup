angular
    .module('taskQL')
    .factory('mainFactory', function($http) {
    	
    	return{
    	    
    		getLogin: function(usernameInput, passwordInput) {
    	    	var url = 'https://alpha.taskql.com/rest/api/1/taskql/login';
    			var loginData = JSON.stringify({username: usernameInput, password: passwordInput});
    			
    			return $http.post(url, loginData, { cache: true});
    	    },
    		
    	    getAll: function(sessionToken){
    			var url = 'https://alpha.taskql.com/rest/api/1/project/getAll';
    			
    			return $http({
    				method: 'GET',
     		        url: url,
     		        headers: {
     		        	SessionToken: sessionToken
     		        }
    			})
    		},
    	    
    	    getProjectInfo: function(projectID, sessionToken){
    			var url = 'https://alpha.taskql.com/rest/api/1/project/getInfoById/';
    			
    			return $http({
    				method: 'GET',
     		        url: url+projectID,
     		        headers: {
     		        	SessionToken: sessionToken
     		        }
    			})
    		},
    	}
	 })