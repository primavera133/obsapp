Meteor.startup(function () {
    'use strict';
    console.log('loadObservations.js', Obsapp.Observations.find().count());

    if (Obsapp.Observations.find().count() === 0) {

        var observations = [
            {
                'name': 'Höna',
                'amount' : 1,
                'sex': 'female',
                'age': 'adult',
                'activity': 'foraging for food',
                'date_start': Obsapp.moment(10, 'HH').format('YYYY-MM-DD HH:mm'),
                'date_end': Obsapp.moment(15, 'HH').format('YYYY-MM-DD HH:mm'),
                'unsure': false,
                'comment': 'Stor glad höna',
                'public': true
            },
            {
                'name': 'Tupp',
                'amount' : 1,
                'sex': 'male',
                'age': 'adult',
                'activity': 'singing',
                'date_start': Obsapp.moment(12, 'HH').format('YYYY-MM-DD HH:mm'),
                'date_end': Obsapp.moment(15, 'HH').format('YYYY-MM-DD HH:mm'),
                'unsure': false,
                'comment': 'Stor glad höna',
                'public': true
            }
        ];

        for (var i = 0; i < observations.length; i++)
            Obsapp.Observations.insert(observations[i]);

    }
});
