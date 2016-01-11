app.controller('TasksCtrl', [
  '$scope',
  'project',
  function($scope, project) {
    $scope.project = project;
  }
]);