angular
    .module('taskQL')
    .factory('mainFactory', function($http) {
        
        return{
            
            getLogin: function(usernameInput, passwordInput) {
                var url = 'https://alpha.taskql.com/rest/api/1/taskql/login';
                var loginData = JSON.stringify({username: usernameInput, password: passwordInput});
                
                return $http.post(url, loginData);
            },
            
            getAll: function(sessionToken){
                var url = 'https://alpha.taskql.com/rest/api/1/project/getAll';
                
                return $http({
                    method: 'GET',
                    url: url,
                    cache: false,
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
                    cache: false,
                    headers: {
                        SessionToken: sessionToken
                    }
                })
            },
            
            rename: function(projectID, newTitle, sessionToken){
                var url = 'https://alpha.taskql.com/rest/api/1/project/rename';
                var renameData = JSON.stringify({projectid: projectID, renameprojecttitle: newTitle});
                
                return $http({
                    method: 'PUT',
                    url: url,
                    data: renameData,
                    cache: false,
                    headers: {
                        SessionToken: sessionToken
                    }
                })
            }
        }
     })