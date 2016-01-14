app.directive('dExpandCollapse', function() {

  return {
    restrict: 'EA',
    link: function(scope, element, attrs) {
      var linkShowMore = element[0].querySelector('#show-more');
      var taskDescription = element[0].querySelector('#task-description');

      linkShowMore.addEventListener('click', function(event) {
        event.preventDefault();
        taskDescription.classList.toggle('shown');
      });
    }
  }

});