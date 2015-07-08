(function () {
    'use strict';

    angular.module('datesModule').directive('showObservationDate', ['moment', function (moment) {

        return {
            restrict: 'EA',
            replace: true,
            scope: {
                observation: '=',
                showOnlyTime: '@',
                showOnlyDate: '@',
                shortDate: '@'
            },
            template: '<span>' +
            '<span ng-if="showDate" ng-bind="startDate"></span> ' +
            '<span ng-if="showTime" ng-bind="startTime"></span> ' +
            '<span ng-if="showDash"> - </span> ' +
            '<span ng-if="showEndDate" ng-bind="endDate"></span> ' +
            '<span ng-if="showEndTime" ng-bind="endTime"></span>' +
            '</span>',
            link: function (scope) {
//console.log(scope.observation, scope.observation.date_start, scope.observation.date_end, scope.observation['date_start']);

                if(!scope.observation.date_start || !scope.observation.date_end){
                    return;
                }

                scope.startDate = scope.shortDate ? moment(scope.observation.date_start).format('D/M') : moment(scope.observation.date_start).format('YYYY-MM-DD');
                scope.startTime = moment(scope.observation.date_start).format('HH:mm');
                scope.endDate = scope.shortDate ? moment(scope.observation.date_end).format('D/M') : moment(scope.observation.date_end).format('YYYY-MM-DD');
                scope.endTime = moment(scope.observation.date_end).format('HH:mm');

                scope.showDate = (!scope.showOnlyTime);
                scope.showTime = (!scope.showOnlyDate);
                scope.showEndDate = scope.showDate && (scope.startDate !== scope.endDate);
                scope.showEndTime = scope.showTime && (scope.showEndDate || (scope.startTime !== scope.endTime));
                scope.showDash = (scope.showEndDate || scope.showEndTime);

            }
        };
    }]);

})();