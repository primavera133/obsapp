angular.module('obsapp').controller('ObservationDetailsController', ['$scope', '$state', '$stateParams', '$meteor',
    function($scope, $state, $stateParams, $meteor){
        'use strict';

        $scope.observations = $meteor.collection(function () {
            return Obsapp.Observations.find({});
        });

        $scope.observation = $meteor.object(Obsapp.Observations, $stateParams.obsId);

        var subscriptionHandle;
        $meteor.subscribe('observations').then(function(handle) {
            subscriptionHandle = handle;
        });

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.$on('$destroy', function() {
            subscriptionHandle.stop();
        });

        $scope.edit = function(){
            $state.go('observationEdit', {obsId: $scope.observation._id});
        };

    }]);