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

				getProjectInfoReq : function(projectID, sessionToken) {
					var url = 'https://alpha.taskql.com/rest/api/1/project/getInfoById/';

					return $http({
						method : 'GET',
						url : url + projectID,
						cache : false,
						headers : {
							SessionToken : sessionToken
						}
					})
				},

				renameProjectReq : function(projectID, newTitle,
						sessionToken) {
					var url = 'https://alpha.taskql.com/rest/api/1/project/rename';
					var renameData = JSON.stringify({
						projectid : projectID,
						renameprojecttitle : newTitle
					});

					return $http({
						method : 'PUT',
						url : url,
						data : renameData,
						cache : false,
						headers : {
							SessionToken : sessionToken
						}
					})
				},
				
				deleteProjectReq : function(projectID, sessionToken) {
					var url = 'https://alpha.taskql.com/rest/api/1/project/delete/';

					return $http({
						method : 'DELETE',
						url : url + projectID,
						cache : false,
						headers : {
							SessionToken : sessionToken
						}
					})
				},
				
				addProjectReq : function(title, sessionToken) {
					var url = 'https://alpha.taskql.com/rest/api/1/project/add';
					var addData = JSON.stringify({
						addprojecttitle : title
					});
					
					return $http({
						method : 'POST',
						url : url,
						data: addData,
						cache : false,
						headers : {
							SessionToken : sessionToken
						}
					})
<<<<<<< HEAD
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
							cache: false,
							data: request,
							headers : {
								SessionToken : sessionToken
							}							
						})
					}
					else {
						console.log("unerlaubte HTTP-Methode")
					}
=======
>>>>>>> master
				}
			}
		})