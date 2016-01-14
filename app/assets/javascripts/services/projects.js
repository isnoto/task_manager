app.factory('projects', [
  '$http',
  function($http) {
    var o = {
      projects: [],
      errors: {}
    };

    o.getAllProjects = function() {
      return $http.get('/projects.json').success(function(data) {
        angular.copy(data, o.projects);
      });
    };

    o.showProject = function(id) {
      return $http.get('/projects/' + id + '.json').then(function(res) {
        return res.data;
      });
    };

    o.createProject = function(project) {
      return $http.post('/projects.json', project)
        .success(function(data) {
          o.projects.push(data);
        })
        .error(function(data) {
          o.errors = data.errors;
        });
    };

    o.deleteProject = function(id) {
      return $http.delete('/projects/' + id + '.json')
    };

    o.addTask = function(id, tasks) {
      return $http.post('/posts/' + id + '/tasks.json', tasks);
    };

    o.createTask = function(id, task) {
      return $http.post('/projects/' + id + '/tasks.json', task)
        .success(function(data) {
          o.projects.push(data);
        })
        .error(function(data) {
          o.errors = data.errors;
        });
    };

    o.editTask = function(projectId, taskId) {
      return $http.get('/projects/' + projectId + '/tasks/' + taskId + '/edit.json').then(function(res) {
        return res.data;
      });
    };

    o.updateTask = function(task) {
      return $http.patch('/projects/' + task.project_id + '/tasks/' + task.id + '.json', task)
        .error(function(data) {
          o.errors = data.errors;
        });
    };

    o.deleteTask = function(project, task) {
      return $http.delete('/projects/' + project.id + '/tasks/'+ task.id + '.json');
    };

    o.completeTask = function(projectId, task) {
      return $http.put('/projects/' + projectId + '/tasks/'+ task.id + '.json', task);
    };

    return o
  }
]);