app.controller('NavigationCtrl', [
  '$scope',
  'Auth',
  'Flash',
  function($scope, Auth, Flash) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    Auth.currentUser().then(function (user) {
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user) {
      $scope.user = user;
      Flash.create('success', 'You have successfully registered');
    });

    $scope.$on('devise:login', function (e, user) {
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user) {
      $scope.user = {};
    });
  }
]);