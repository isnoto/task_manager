app.controller('AuthCtrl', [
  '$scope',
  '$state',
  'Auth',
  'Flash',
  function($scope, $state, Auth, Flash) {
    $scope.login = function() {
      Auth.login($scope.user).then(function(){
        $state.go('home');
        Flash.create('success', 'Welcome');
      }, function(err) {
        Flash.create('danger', 'You have entered a wrong email or password');
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function(){
        $state.go('home');
      }, function(err) {
        $scope.validationErrors = err.data.errors;
        Flash.create('danger', 'Check the correctness of filling fields')
      })
    };
  }
]);