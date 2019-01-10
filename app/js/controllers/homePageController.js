'use strict';

eventsApp.controller('homePageController',
    function EhomePageController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function(response) { console.log('success', response)})
                    .catch(function(response) { console.log('failure', response)});
            }
        };

        $scope.cancelEvent = function() {
            window.location = '/homePage.html';
        }

    }
);