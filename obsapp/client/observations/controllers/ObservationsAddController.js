//console.log('observationsListController.js');

angular.module('obsapp').controller('ObservationAddController', ['$rootScope', '$scope', '$meteor', '$state',
    function ($rootScope, $scope, $meteor, $state) {
        'use strict';

        $scope.observations = $meteor.collection(function () {
            return Obsapp.Observations.find({}, {
                sort: $scope.getReactively('sort')
            });
        });

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.getUserById = function (userId) {
            return Meteor.users.findOne(userId);
        };


        $scope.add = function (newObservation) {
            newObservation.owner=$rootScope.currentUser._id; $scope.observations.push(newObservation);
            $state.go('observations');
        };

    }]);
