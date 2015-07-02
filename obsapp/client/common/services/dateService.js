angular.module('obsapp').factory('dateService', [function () {
    'use strict';

    var dateService = {};

    dateService.getTodayAtNoon = function () {
        return moment(12, 'HH');
    };

    dateService.formatDateNoTime = function (myDate) {
        var momentDate = moment(myDate);
        return momentDate.format('YYYY-MM-DD');
        //return momentDate.format();
    };

    return dateService;

}]);