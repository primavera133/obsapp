describe('showDateDirective', function () {
    'use strict';


    it('should display Date for different days', function () {
        var template = '<span show-observation-date observation="observation"></span>';
        var ctx = testContext({
            observation: {
                date_start: moment('2015-07-02T10:00:00+02:00').valueOf(),
                date_end: moment('2015-07-03T12:00:00+02:00').valueOf()
            }, template: template
        });

        expect(ctx.element.find('span:first').html()).toBe('2015-07-02');
        expect(ctx.element.find('span:nth-child(2)').html()).toBe('10:00');
        expect(ctx.element.find('span:nth-child(3)').html()).toBe(' - ');
        expect(ctx.element.find('span:nth-child(4)').html()).toBe('2015-07-03');
        expect(ctx.element.find('span:last').html()).toBe('12:00');
    });

    it('should display Date for same day', function () {
        var template = '<span show-observation-date observation="observation"></span>';
        var ctx = testContext({
            observation: {
                date_start: moment('2015-07-02T10:00:00+02:00').valueOf(),
                date_end: moment('2015-07-02T12:00:00+02:00').valueOf()
            }, template: template
        });

        expect(ctx.element.find('span:first').html()).toBe('2015-07-02');
        expect(ctx.element.find('span:nth-child(2)').html()).toBe('10:00');
        expect(ctx.element.find('span:nth-child(3)').html()).toBe(' - ');
        expect(ctx.element.find('span:last').html()).toBe('12:00');
    });

    it('should display Date for same day and same time', function () {
        var template = '<span show-observation-date observation="observation"></span>';
        var ctx = testContext({
            observation: {
                date_start: moment('2015-07-02T10:00:00+02:00').valueOf(),
                date_end: moment('2015-07-02T10:00:00+02:00').valueOf()
            }, template: template
        });

        expect(ctx.element.find('span:first').html()).toBe('2015-07-02');
        expect(ctx.element.find('span:last').html()).toBe('10:00');
    });

    it('should display only Date', function () {
        var template = '<span show-observation-date observation="observation" show-only-date="true"></span>';
        var ctx = testContext({
            observation: {
                date_start: moment('2015-07-02T10:00:00+02:00').valueOf(),
                date_end: moment('2015-07-03T10:00:00+02:00').valueOf()
            }, template: template
        });

        expect(ctx.element.find('span:first').html()).toBe('2015-07-02');
        expect(ctx.element.find('span:nth-child(2)').html()).toBe(' - ');
        expect(ctx.element.find('span:last').html()).toBe('2015-07-03');
        expect(ctx.element.find('span:last').html()).not.toBe('10:00');
    });

    it('should display only Date for same date', function () {
        var template = '<span show-observation-date observation="observation" show-only-date="true"></span>';
        var ctx = testContext({
            observation: {
                date_start: moment('2015-07-02T10:00:00+02:00').valueOf(),
                date_end: moment('2015-07-02T12:00:00+02:00').valueOf()
            }, template: template
        });

        expect(ctx.element.find('span:first').html()).toBe('2015-07-02');
        expect(ctx.element.find('span:last').html()).toBe('2015-07-02');
        expect(ctx.element.find('span:nth-child(2)').html()).not.toBe(' - ');
        expect(ctx.element.find('span:last').html()).not.toBe('10:00');
        expect(ctx.element.find('span:last').html()).not.toBe('12:00');
    });

    it('should display only Time', function () {
        var template = '<span show-observation-date observation="observation" show-only-time="true"></span>';
        var ctx = testContext({
            observation: {
                date_start: moment('2015-07-02T10:00:00+02:00').valueOf(),
                date_end: moment('2015-07-02T12:00:00+02:00').valueOf()
            }, template: template
        });

        expect(ctx.element.find('span:first').html()).toBe('10:00');
        expect(ctx.element.find('span:nth-child(2)').html()).toBe(' - ');
        expect(ctx.element.find('span:last').html()).toBe('12:00');
    });

    it('should display date in short form', function () {
        var template = '<span show-observation-date observation="observation" short-date="true"></span>';
        var ctx = testContext({
            observation: {
                date_start: moment('2015-07-02T10:00:00+02:00').valueOf(),
                date_end: moment('2015-07-03T12:00:00+02:00').valueOf()
            }, template: template
        });

        expect(ctx.element.find('span:first').html()).toBe('2/7');
        expect(ctx.element.find('span:nth-child(2)').html()).toBe('10:00');
        expect(ctx.element.find('span:nth-child(3)').html()).toBe(' - ');
        expect(ctx.element.find('span:nth-child(4)').html()).toBe('3/7');
        expect(ctx.element.find('span:last').html()).toBe('12:00');
    });



    function testContext(options) {

        module('datesModule');

        var ctx = {};

        ctx.element = angular.element(options.template);

        inject(function ($rootScope, $compile) {

            ctx.scope = $rootScope;
            ctx.scope.observation = options.observation;

            ctx.element = $compile(ctx.element)(ctx.scope);
            ctx.scope.$digest();
        });

        return ctx;
    }
});

