//console.log('routes.js');

angular.module('obsapp').run(['$rootScope', '$state', function($rootScope, $state) {
    'use strict';

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === 'AUTH_REQUIRED') {
            $state.go('observations');
        }
    });
}]);

angular.module('obsapp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('observations', {
                url: '/observations',
                templateUrl: 'client/observations/views/observations-list.ng.html',
                controller: 'ObservationsListController'
            })
            .state('observationAdd', {
                url: '/observation/add',
                templateUrl: 'client/observations/views/observation-add.ng.html',
                controller: 'ObservationAddController',
                resolve: {
                    'currentUser': ['$meteor', function($meteor){
                        return $meteor.requireUser();
                    }],
                    'names': ['$meteor', function($meteor){
                        return $meteor.subscribe('names');
                    }]
                }
            })
            .state('observationDetails', {
                url: '/observation/:obsId',
                templateUrl: 'client/observations/views/observation-details.ng.html',
                controller: 'ObservationDetailsController',
                resolve: {
                    'currentUser': ['$meteor', function($meteor){
                        return $meteor.requireUser();
                    }]
                }
            })
            .state('observationEdit', {
                url: '/observation/:obsId/edit',
                templateUrl: 'client/observations/views/observation-edit.ng.html',
                controller: 'ObservationEditController',
                resolve: {
                    'currentUser': ['$meteor', function($meteor){
                        return $meteor.requireUser();
                    }]
                }
            });
        $urlRouterProvider.otherwise('/observations');
    }]);

