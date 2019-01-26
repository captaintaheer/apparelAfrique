'use strict';

eventsApp.controller('mainMenuController',
    function mainMenuController($scope, $location) {
        console.log('absUrl:', $location.absUrl());
        console.log('protocol:', $location.protocol());
        console.log('port:', $location.port());
        console.log('host:', $location.host());
        console.log('path:', $location.path());
        console.log('search:', $location.search());
        console.log('hash:', $location.hash());
        console.log('url:', $location.url());
        $scope.createHome = function() {
            $location.replace();
            $location.url('/homePage');
        };
        $scope.createEvent = function() {
            $location.replace();
            $location.url('/eventsPage');
        };
        $scope.createGallery = function() {
            $location.replace();
            $location.url('/galleryPage');
        };
        $scope.createAbout = function() {
            $location.replace();
            $location.url('/aboutPage');
        };
        $scope.createContact = function() {
            $location.replace();
            $location.url('/contactPage');
        };

    })
