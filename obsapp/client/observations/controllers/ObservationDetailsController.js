angular.module('obsapp').controller('ObservationDetailsController', ['$scope', '$state', '$stateParams', '$meteor', 'dateService',
    function ($scope, $state, $stateParams, $meteor, dateService) {
        'use strict';

        $scope.observations = $meteor.collection(function () {
            return Obsapp.Observations.find({});
        });

        $scope.observation = $meteor.object(Obsapp.Observations, $stateParams.obsId);
        $scope.dateService = dateService;

        var subscriptionHandle;
        $meteor.subscribe('observations').then(function (handle) {
            subscriptionHandle = handle;
        });

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.$on('$destroy', function () {
            subscriptionHandle.stop();
        });

        $scope.edit = function () {
            $state.go('observationEdit', {obsId: $scope.observation._id});
        };

        $scope.remove = function (observation) {
            $scope.observations.remove(observation);
        };


    }]);