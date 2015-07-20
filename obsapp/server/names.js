Meteor.publish('names', function (options, searchString) {
    'use strict';

/*
    if (_.isString(searchString)) {
        return Obsapp.Names.find({
            'sv': {'$regex': '.*' + searchString || '' + '.*'},
            $or: [
                {
                    'en': {'$regex': '.*' + searchString || '' + '.*'}
                },
                {
                    'sc': {'$regex': '.*' + searchString || '' + '.*'}
                }
            ]
        }, options);
    } else {
*/
        return Obsapp.Names.find({});
        //return Obsapp.Names.find({}, {fields: {sv: 1, en: 1, sc: 1}});
/*
    }
*/

});