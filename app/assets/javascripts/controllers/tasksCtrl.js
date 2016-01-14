app.controller('TasksCtrl', [
  '$scope',
  '$filter',
  'Flash',
  'project',
  'task',
  'projects',
  function($scope, $filter, Flash, project, task, projects) {
    $scope.project = project;
    $scope.task = task;
    $scope.show = false;

    $scope.showForm = function() {
      $scope.show = true;
    };

    $scope.hideForm = function() {
      $scope.show = false;
    };

    $scope.priorities = [{
      value: '1',
      label: 'Critical'
    }, {
      value: '2',
      label: 'High'
    }, {
      value: '3',
      label: 'Medium'
    }, {
      value: '4',
      label: 'Low'
    }];

    $scope.addTask = function() {
      if (!$scope.name|| $scope.name === '') {
        Flash.create('danger', 'Name cannot be empty');
        return;
      }

      projects.createTask(project.id, {
        name: $scope.name,
        description: $scope.description,
        priority: $scope.priority.value,
        deadline: $scope.deadline
      }).success(function(task) {
          $scope.project.tasks.push(task);
          Flash.create('success', 'Task successfully added');
        })
    };

    $scope.updateTask = function() {
      var taskPriority = $scope.task.priority;
      var priority = $scope.priority.value;

      if (!$scope.task.name|| $scope.task.name === '') {
        Flash.create('danger', 'Name cannot be empty');
        return;
      }

      if (priority && taskPriority != priority) {
        $scope.task.priority = priority;
      }

      projects.updateTask($scope.task)
        .success(function() {
          Flash.create('success', 'Task successfully updated');
        });
    };

    $scope.deleteTask = function(project, task, index) {
      projects.deleteTask(project, task).success(function() {
        $scope.project.tasks.splice(index, 1);
        Flash.create('success', 'Task successfully deleted')
      });
    };

    $scope.toggleCompleteTask = function(projectId, task) {
      projects.completeTask(projectId, task);
    };

    $scope.showCurrentPriority = function(taskIndex) {
      var selected = $filter('filter')($scope.priorities, {value: $scope.project.tasks[taskIndex].priority});
      return ($scope.project.tasks[taskIndex].priority && selected.length) ? selected[0].label : 'Not set';
    };
  }
]);