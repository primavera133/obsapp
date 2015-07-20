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
                'date_start': moment(10, 'HH').valueOf(),
                'date_end': moment(15, 'HH').valueOf(),
                'unsure': false,
                'comment': 'Stor glad höna',
                'creator': 'jqbD4qD3WHKDqsTQJ',
                'owners': ['jqbD4qD3WHKDqsTQJ']
            },
            {
                'name': 'Tupp',
                'amount' : 1,
                'sex': 'male',
                'age': 'adult',
                'activity': 'singing',
                'date_start': moment(12, 'HH').valueOf(),
                'date_end': moment(15, 'HH').valueOf(),
                'unsure': false,
                'comment': 'Stor glad höna',
                'creator': 'jqbD4qD3WHKDqsTQJ',
                'owners': ['jqbD4qD3WHKDqsTQJ']
            },
            {
                'name': 'Kråka',
                'amount' : 1,
                'sex': 'female',
                'age': 'adult',
                'date_start': moment('2015-07-06 10:00').valueOf(),
                'date_end': moment('2015-07-06 10:00').valueOf(),
                'unsure': false,
                'creator': 'jqbD4qD3WHKDqsTQJ',
                'owners': ['jqbD4qD3WHKDqsTQJ']
            },
            {
                'name': 'Kaja',
                'amount' : 1,
                'sex': 'male',
                'age': 'adult',
                'date_start': moment('2015-07-06 10:00').valueOf(),
                'date_end': moment('2015-07-06 10:00').valueOf(),
                'unsure': false,
                'creator': 'jqbD4qD3WHKDqsTQJ',
                'owners': ['jqbD4qD3WHKDqsTQJ']
            }
        ];

        for (var i = 0; i < observations.length; i++)
            Obsapp.Observations.insert(observations[i]);

    }
});
