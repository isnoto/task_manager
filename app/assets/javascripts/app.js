var app = angular.module('taskManager',
  [
    'ui.router',
    'Devise',
    'flash',
    'xeditable'
  ]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});