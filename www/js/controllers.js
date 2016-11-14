angular.module('taskQL').controller('loginController', function($scope) {
    $scope.credentials= {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.credentials.username, $scope.credentials.password).success(function(credentials) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})