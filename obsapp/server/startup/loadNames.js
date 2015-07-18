Meteor.startup(function () {
    'use strict';

    if (Obsapp.Names.find().count() === 0) {

        for (var i = 0; i < Dataset_avesScEnSv.length; i++)
            Obsapp.Names.insert(Dataset_avesScEnSv[i]);

    }
});
