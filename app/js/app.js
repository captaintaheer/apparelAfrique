'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    eventsApp.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/homePage',
            {
                templateUrl: 'templates/homePage.html',
                controller: 'homePageController'
            })
            $routeProvider.when('/eventsPage',
                {
                    templateUrl: 'templates/eventsPage.html',
                    controller: 'eventsPageController'
                })
                $routeProvider.when('/galleryPage',
                    {
                        templateUrl: 'templates/galleryPage.html',
                        controller: 'galleryPageController'
                    });
                    $routeProvider.when('/aboutPage',
                        {
                            templateUrl: 'templates/aboutPage.html',
                            controller: 'aboutPageController'
                        })
                        $routeProvider.when('/contactPage',
                            {
                                templateUrl: 'templates/contactPage.html',
                                controller: 'contactPageController'
                            });

            $routeProvider.otherwise({redirectTo: '/homePage'});

            $locationProvider.html5Mode(true);
    }
    );
