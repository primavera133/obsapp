(function() {
    'use strict';

    angular.module('datesModule').factory('dateService', [function () {

        var dateService = {};

        dateService.getTodayAtNoon = function () {
            return Obsapp.Moment(12, 'HH');
        };

        dateService.formatDateNoTime = function (myDate) {
            var momentDate = Obsapp.Moment(myDate);
            return momentDate.format('YYYY-MM-DD');
            //return momentDate.format();
        };

        dateService.formatDate = function (myDate) {
            var momentDate = Obsapp.Moment(myDate);
            return momentDate.format('YYYY-MM-DD');
            //return momentDate.format();
        };

        dateService.formatTime = function (myDate) {
            var momentDate = Obsapp.Moment(myDate);
            return momentDate.format('HH:mm ');
            //return momentDate.format();
        };

        return dateService;

    }]);
})();