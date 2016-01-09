app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider, AuthInterceptProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/assets/home/home.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'assets/auth/_login.html',
        controller: 'AuthCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'assets/auth/_register.html',
        controller: 'AuthCtrl',

      });

    $urlRouterProvider.otherwise('home');
  }
]);