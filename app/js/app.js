'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/homePage',
            {
                templateUrl: 'templates/homePage.html',
                controller: 'homePageController'
            });
    }
    );