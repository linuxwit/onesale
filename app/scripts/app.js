define([
  'angular',
  'uiRoute',
  'uiBootstrap',
  'controllers/index',
  'directives/index',
  'services/index',
  'filters/index'
], function(ng) {
  return ng.module('app', [
    'ui.router',
    'ui.bootstrap',
    'app.controllers',
    'app.directives',
    'app.services',
    'app.filters'
  ]);
});