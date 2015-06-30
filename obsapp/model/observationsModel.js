(function () {
    'use strict';

    //console.log('observationsModel.js');

    Obsapp.Observations = new Mongo.Collection('observations');

    Obsapp.Observations.allow({
        insert: function (userId, observation) {
            return userId && observation.owner === userId;
        },
        update: function (userId, observation/*, fields, modifier*/) {
            return userId && observation.owner === userId;
        },
        remove: function (userId, observation) {
            return userId && observation.owner === userId;
        }
    });

}());

