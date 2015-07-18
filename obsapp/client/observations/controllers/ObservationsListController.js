angular.module('obsapp').controller('ObservationsListController', ['$rootScope', '$scope', '$meteor', '$state',
    function ($rootScope, $scope, $meteor, $state) {
        'use strict';

        $scope.page = 1;
        $scope.perPage = 10;
        $scope.sort = {date_start: 1};
        var orderProperty = '1';

        $scope.observations = $meteor.collection(function () {
            return Obsapp.Observations.find({}, {
                sort: $scope.getReactively('sort')
            });
        });

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $meteor.autorun($scope, function () {
            $meteor.subscribe('observations', {
                limit: parseInt($scope.getReactively('perPage')),
                skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
                sort: $scope.getReactively('sort')
            }, $scope.getReactively('search')).then(function () {
                $scope.observationsCount = $meteor.object(Obsapp.Counts, 'numberOfObservations', false);

                $scope.observations.forEach( function (observation) {
                    observation.onClicked = function () {
                        $state.go('observationDetails', {obsId: observation._id});
                    };
                });
            });

        });


        $scope.pageChanged = function (newPage) {
            $scope.page = newPage;
        };

        $scope.getUserById = function(userId){
            return Meteor.users.findOne(userId);
        };

        $scope.creator = function (observation) {

            if (!observation) {
                return;
            }

            var owner = $scope.getUserById(observation.owner);
            if (!owner) {
                return 'nobody';
            }

            if ($rootScope.currentUser) {
                if ($rootScope.currentUser._id) {
                    if (owner._id === $rootScope.currentUser._id) {
                        return 'me';
                    }
                }
            }

            return owner;
        };

        $scope.add = function(){
            $state.go('observationAdd');
        };

        $scope.reverseOrder = function(){
            orderProperty = orderProperty === '1' ? '-1' : '1';

            $scope.sort = {date_start: parseInt(orderProperty)};

        };

    }]);
