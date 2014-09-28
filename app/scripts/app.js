define([
  'angular',
  'ngRoute',
  'controllers/index',
  'directives/index'
], function(ng) {
  return ng.module('app', [
    'ngRoute',
    'app.controllers',
    'app.directives'
  ]);
});