angular.module('taskQL')...
	.factory('LoginService', function($q) {
    return {
        loginUser: function(name, pw, $http) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 			 var jsondata = {
					username : name,
					password : pw
					};
			 var loggingIn = $http.post('https://alpha.taskql.com/rest/api/1/taskql/login',jsondata);
			 loggingIn.success(function(data,status,headers,config) {
		  		console.log(data);	  
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})