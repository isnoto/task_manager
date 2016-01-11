app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/assets/home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'assets/auth/_login.html',
        controller: 'AuthCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'assets/auth/_register.html',
        controller: 'AuthCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'assets/projects/_index.html',
        controller: 'ProjectsCtrl',
        resolve: {
          projectsPromise: ['projects', function(projects){
            return projects.getAll();
          }]
        }
      })
      .state('projectTasks', {
        url: '/projects/{id}',
        templateUrl: 'assets/projects/_show.html',
        controller: 'TasksCtrl',
        resolve: {
          project: ['$stateParams', 'projects', function($stateParams, projects) {
            return projects.show($stateParams.id);
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
  }
]);