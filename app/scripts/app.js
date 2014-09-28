define([
  'angular',
  'ngRoute',
  'controllers/index',
  'directives/index',
  'services/index',
  'filters/index'
], function(ng) {
  return ng.module('app', [
    'ngRoute',
    'app.controllers',
    'app.directives',
    'app.services',
    'app.filters'
  ]);
});