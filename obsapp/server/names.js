Meteor.publish('names', function () {
    'use strict';

    return Obsapp.Names.find({}, {fields: {sv: 1, en: 1, sc: 1}});

});