app.controller('ProjectsCtrl', [
  '$scope',
  '$http',
  '$q',
  'Flash',
  'projects',
  function($scope, $http, $q,Flash, projects) {
    $scope.projects = projects.projects;
    $scope.validationErrrors = null;

    $scope.addProject = function() {
      if (!$scope.name|| $scope.name === '') { return; }

      projects.create({ name: $scope.name })
        .then(function() {
          Flash.create('success', 'Project ' + $scope.name + ' was successfully created');
          $scope.name = '';
        }, function() {
          Flash.create('danger', 'Check the correctness of filling fields');
          $scope.nameError = projects.errors.name;
        });
    };

    $scope.updateProjectName = function(project, $index) {
      var d = $q.defer();
      $http.patch('projects/'+ project.id + '.json', project)
        .success(function() {
          Flash.create('success', 'Project name successfully updated');
          d.resolve();
        })
        .error(function(data) {
          d.reject(data.errors.name[0]);
        });

      return d.promise;
    };

    $scope.deleteProject = function(projectId, index) {
      projects.delete(projectId);
      $scope.projects.splice(index, 1);
      Flash.create('success', 'Project has been deleted')
    }
  }
]);