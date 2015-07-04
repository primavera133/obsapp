//console.log('observationsListController.js');

angular.module('obsapp').controller('ObservationAddController', ['$rootScope', '$scope', '$meteor', '$state',
    'observationAddChoicesService',
    function ($rootScope, $scope, $meteor, $state, observationAddChoicesService) {
        'use strict';


        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.getUserById = function (userId) {
            return Meteor.users.findOne(userId);
        };

        $scope.observations = $meteor.collection(function () {
            return Obsapp.Observations.find({});
        });

        $scope.add = function (newObservation) {
            newObservation.owner = $rootScope.currentUser._id;
            $scope.observations.push(newObservation);
            $state.go('observations');
        };

        $scope.sexChoices = observationAddChoicesService.sexChoices;

        $scope.ageChoices = observationAddChoicesService.ageChoices;

        $scope.activityChoices = observationAddChoicesService.activityChoices;

        $scope.newObservation = {
            /*sex: $scope.sexChoices[0]*/
        };


         ////// DATE
        var $datePickers = $('#dateTimePickerAddStart, #dateTimePickerAddEnd');

        $datePickers.datetimepicker({
            locale: 'sv',
            showTodayButton: true,
            showClear: false,
            showClose: false,
            icons:{
                today: 'fui-radio-checked'
            },
            stepping: 15
        });

    }])
;
