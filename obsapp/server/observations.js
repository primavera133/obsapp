Meteor.publish('observations', function (options, searchString) {
    'use strict';
    if (searchString === null || typeof searchString === 'undefined') {
        searchString = '';
    }

    Obsapp.Counts.publish(this, 'numberOfObservations', Obsapp.Observations.find({
        'name': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'},
        $or: [
            //{
            //    $and: [
            //        {'public': true},
            //        {'public': {$exists: true}}
            //    ]
            //},
            {
                $and: [
                    {owners: this.userId},
                    {owners: {$exists: true}}
                ]
            }
        ]
    }), {noReady: true});

    return Obsapp.Observations.find({
        'name': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'},
        $or: [
            //{
            //    $and: [
            //        {'public': true},
            //        {'public': {$exists: true}}
            //    ]
            //},
            {
                $and: [
                    {owners: this.userId},
                    {owners: {$exists: true}}
                ]
            }
        ]
    }, options);


});