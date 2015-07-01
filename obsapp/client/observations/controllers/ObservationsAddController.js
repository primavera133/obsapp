//console.log('observationsListController.js');

angular.module('obsapp').controller('ObservationAddController', ['$rootScope', '$scope', '$meteor', '$state', 'observationAddChoicesService',
    function ($rootScope, $scope, $meteor, $state, observationAddChoicesService) {
        'use strict';


        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.getUserById = function (userId) {
            return Meteor.users.findOne(userId);
        };

        $scope.add = function (newObservation) {
            newObservation.owner = $rootScope.currentUser._id;
            $scope.observations.push(newObservation);
            $state.go('observations');
        };

        $scope.sexChoices = observationAddChoicesService.sexChoices;

        $scope.ageChoices = observationAddChoicesService.ageChoices;

        $scope.activityChoices = observationAddChoicesService.activityChoices;

/*
        $scope.newObservation = {
            sex: $scope.sexChoices[0]
        };
*/


        /*
         ////// DATE

         $scope.openDatePicker = function($event){
         $event.preventDefault();
         $event.stopPropagation();

         //TODO: rename opened
         $scope.opened = true;
         };

         $scope.today = function() {
         $scope.newObservation.date = new Date();
         };
         $scope.today();

         $scope.clearDate = function () {
         $scope.newObservaton.date = null;
         };


         $scope.dateOptions = {
         formatYear: 'yy',
         startingDay: 1
         };
         */

    }])
;
