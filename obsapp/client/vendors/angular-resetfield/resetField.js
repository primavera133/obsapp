/* http://softwareninjaneer.com/blog/creating-an-angularjs-reset-field-directive/ */

angular.module('am.resetField', []).directive('amResetField', ['$compile', '$timeout', function($compile, $timeout) {
    'use strict';
    return {
        require: 'ngModel',
        link: function(scope, el, attrs, ctrl) {
            // limit to input element of specific types
            var inputTypes = /text|search|tel|url|email|password/i;
            if (el[0].nodeName !== 'INPUT') {
                throw new Error('resetField is limited to input elements');
            }
            if (!inputTypes.test(attrs.type)) {
                throw new Error('Invalid input type for resetField: ' + attrs.type);
            }

            // compiled reset icon template
            var template = $compile('<i ng-show="enabled" ng-mousedown="reset()" class="fui-cross-circle"></i>')(scope);
            el.after(template);

            scope.reset = function() {
                ctrl.$setViewValue(null);
                ctrl.$render();
                $timeout(function() {
                    el[0].focus();
                }, 0, false);
            };

            el.bind('input', function() {
                scope.enabled = !ctrl.$isEmpty(el.val());
            })
                .bind('focus', function() {
                    scope.enabled = !ctrl.$isEmpty(el.val());
                    scope.$apply();
                })
                .bind('blur', function() {
                    scope.enabled = false;
                    scope.$apply();
                });
        }
    };
}]);