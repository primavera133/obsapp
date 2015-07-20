angular.module('obsapp').controller('ObservationEditController', ['$scope', '$stateParams', '$meteor', 'observationAddChoicesService',
    function ($scope, $stateParams, $meteor, observationAddChoicesService) {
        'use strict';

        $scope.observation = $meteor.object(Obsapp.Observations, $stateParams.obsId);

        $scope.sexChoices = observationAddChoicesService.sexChoices;
        $scope.ageChoices = observationAddChoicesService.ageChoices;
        $scope.activityChoices = observationAddChoicesService.activityChoices;


        var subscriptionHandle;
        $meteor.subscribe('observations').then(function (handle) {
            subscriptionHandle = handle;
        });

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.$on('$destroy', function () {
            subscriptionHandle.stop();
        });

        $scope.isOwner = function (currentUser) {
            return _.contains($scope.observation.owners, currentUser._id);
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
            $scope.observation[name] = value;
        });

    }]);