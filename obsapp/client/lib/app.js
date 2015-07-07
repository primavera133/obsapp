(function () {
    'use strict';

    angular.module('datesModule', ['angularMoment']);

    angular.module('obsapp', [
        'angular-meteor',
        'ui.router',
        'angularUtils.directives.dirPagination',
        'am.resetField',
        'toggle-switch',
        'angularMoment',
        'datesModule',
        'yes-no'
    ]);

    function onReady() {
        angular.bootstrap(document, ['obsapp']);
        //console.log('bootstrapped');
    }

    if (Meteor.isCordova)
        angular.element(document).on('deviceready', onReady);
    else
        angular.element(document).ready(onReady);

}());
