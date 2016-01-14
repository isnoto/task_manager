var app = angular.module('taskManager',
  [
    'ui.router',
    'Devise',
    'flash',
    'xeditable',
    '720kb.datepicker'
  ]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});