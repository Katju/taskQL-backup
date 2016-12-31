angular
.module('taskQL')
.factory('mainFactory', function($http) {
	return {
		
		getLoginReq : function(loginUrl, loginData) {
			return $http.post(loginUrl, loginData);
		},
		
		genericReq: function(sessionToken, method, url, request) {
			if (method == "GET" || method == "DELETE" || method == "PUT" || method == "POST") {
				return $http({
					method : method,
					url : url,
					data: request,
					cache : false,
					headers : {
						SessionToken: sessionToken
					}
				})
			}			
			else {
				console.log("unerlaubte HTTP-Methode")
			}
		}
	}
})