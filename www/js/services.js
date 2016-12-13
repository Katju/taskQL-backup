angular
.module('taskQL')
.factory(
		'mainFactory',
		function($http) {

			return {

				getLoginReq : function(usernameInput, passwordInput) {
					var url = 'https://alpha.taskql.com/rest/api/1/taskql/login';
					var loginData = JSON.stringify({
						username : usernameInput,
						password : passwordInput
					});

					return $http.post(url, loginData);
				},

				getAllReq : function(sessionToken) {
					var url = 'https://alpha.taskql.com/rest/api/1/project/getAll';

					return $http({
						method : 'GET',
						url : url,
						cache : false,
						headers : {
							SessionToken : sessionToken
						}
					})
				},
				
				genericReq: function(sessionToken, method, url, request) {
					if (method == "GET" || method == "DELETE") {
						return $http({
							method : method,
							url : url + request,
							cache : false,
							headers : {
								SessionToken: sessionToken
							}
						})
					}
					
					else if (method == "PUT" || method == "POST") {
						return $http({
							method : method,
							url: url,
							data: request,
							cache: false,
							headers : {
								SessionToken : sessionToken
							}							
						})
					}
					
					else {
						console.log("unerlaubte HTTP-Methode")
					}
				}
			}
		})