(function () {
    'use strict';

    //console.log('observationsModel.js');

    Obsapp.Names = new Mongo.Collection('names');

/*
    Obsapp.Names.allow({
        insert: function (userId, name) {
            return userId && name.owner === userId;
        },
        update: function (userId, name/!*, fields, modifier*!/) {
            return userId && name.owner === userId;
        },
        remove: function (userId, name) {
            return userId && name.owner === userId;
        }
    });
*/

}());

