angular
.module('taskQL', ['ionic', 'ui.ace'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory
    // bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops
    // the viewport
      // from snapping when text inputs are focused. Ionic handles this
    // internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('registration', {
      url:'/registration',
      views:{
        'baseView': {
          templateUrl:'templates/registration.html'
        }
      }
    })

    .state('login', {
      url:'/login',
      views:{
        'baseView': {
          templateUrl:'templates/login.html'
        }
      }
    })

    .state('dashboard', {
      url:'/dashboard',
      views:{
        'baseView': {
          templateUrl: 'templates/dashboard.html'
        },
        'sideView': {
          templateUrl: 'templates/sidemenu.html'
        }
      }
   })

    .state('dashboard_subproject', {
      url:'/dashboard_subproject',
      views:{
        'baseView': {
          templateUrl: 'templates/dashboard_subproject.html'
        },
        'sideView': {
          templateUrl: 'templates/sidemenu.html'
        },
        'sideView': {
          templateUrl: 'templates/sidemenu/filter.html'
        }
      }
    })

    .state('projecteditor', {
      url:'/projecteditor',
      views:{
        'baseView': {
          templateUrl: 'templates/projecteditor.html'
        },
        'sideView': {
          templateUrl: 'templates/sidemenu.html'
        }
      }
    })

    .state('sidemenu', {
      url:'/sidemenu',
      views: {
        'sideView': {
          templateUrl: 'templates/sidemenu.html'
        }
      }
    })

    .state('filter', {
      url:'/filter',
      views:{
        'sideView': {
          templateUrl: 'templates/filter.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/login');
});