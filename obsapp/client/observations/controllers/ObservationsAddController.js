angular.module('obsapp').controller('ObservationAddController', ['$rootScope', '$scope', '$meteor', '$state',
    'observationAddChoicesService', 'observationSuggestService',
    function ($rootScope, $scope, $meteor, $state, observationAddChoicesService, observationSuggestService) {
        'use strict';


        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.getUserById = function (userId) {
            return Meteor.users.findOne(userId);
        };

        $scope.observations = $meteor.collection(function () {
            return Obsapp.Observations.find({});
        });

        var names = observationSuggestService.getNamesBloodhound();
        names.initialize();

        $scope.addNameOptions = {
            highlight: true
        };

        // Single dataset example
        $scope.addNameDataSet = {
            displayKey: 'sv',
            source: names.ttAdapter()
        };


        $scope.add = function (newObservation) {
            if (!$scope.addObservationForm.$valid) {
                return;
            }

            newObservation.owners = [$rootScope.currentUser._id];
            newObservation.creator = $rootScope.currentUser._id;

            if (_.isObject(newObservation.name)) {
                if (_.isString(newObservation.name.sv)) {
                    newObservation.name = newObservation.name.sv;
                }
            }
            newObservation.start_date = moment(newObservation.start_date).valueOf();
            newObservation.end_date = moment(newObservation.end_date).valueOf();

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
            icons: {
                today: 'fui-radio-checked'
            },
            stepping: 15
        });

        $datePickers.on('dp.change', function (e) {
            var name = $(e.target).find('input').attr('name'),
                value = $(e.target).find('input').val();
            //no 2-way binding for jQuery hackz, do it manually
            $scope.newObservation[name] = value;
        });


    }])
;
