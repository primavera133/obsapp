(function () {
    'use strict';

    Obsapp.Observations = new Mongo.Collection('observations');

    Obsapp.Observations.allow({
        insert: function (userId, observation) {
            return userId && _.contains(observation.owners,userId);
        },
        update: function (userId, observation/*, fields, modifier*/) {
            return userId && _.contains(observation.owners,userId);
        },
        remove: function (userId, observation) {
            return userId && _.contains(observation.owners,userId);
        }
    });

}());

