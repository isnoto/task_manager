app.factory('projects', [
  '$http',
  function($http) {
    var o = {
      projects: [],
      errors: {}
    };

    o.getAll = function() {
      return $http.get('/projects.json').success(function(data) {
        angular.copy(data, o.projects);
      });
    };

    o.show = function(id) {
      return $http.get('/projects/' + id + '.json').then(function(res) {
        console.log(res);
        return res.data;
      });
    };

    o.create = function(project) {
      return $http.post('/projects.json', project)
        .success(function(data) {
          o.projects.push(data);
        })
        .error(function(data) {
          o.errors = data.errors;
        });
    };

    o.delete = function(id) {
      return $http.delete('/projects/' + id + '.json')
    };

    return o
  }
]);