angular.module('obsapp').factory('observationAddChoicesService', [function () {
    'use strict';

    var ObservationAddChoicesService = {};

    ObservationAddChoicesService.sexChoices = [{
        label: 'male'
    }, {
        label: 'female'
    }, {
        label: 'female coloured'
    }, {
        label: 'in pair'
    }];

    ObservationAddChoicesService.ageChoices = [{label: 'egg', id: 'egg'},
        {label: 'pulli', id: 'pulli'},
        {label: 'adult', id: 'adult'},
        {label: '1k', id: '1k'},
        {label: '1k+', id: '1k+'},
        {label: '2k', id: '2k'},
        {label: '2k+', id: '2k+'},
        {label: '3k', id: '3k'},
        {label: '3k+', id: '3k+'},
        {label: '4k', id: '4k'},
        {label: '4k+', id: '4k+'},
        {label: '5k', id: '5k'},
        {label: '5k+', id: '5k+'},
        {label: '6k', id: '6k'},
        {label: '6k+', id: '6k+'}];

    ObservationAddChoicesService.activityChoices = [
        {label: 'Bo, ägg/ungar', id: 'Nest, eggs/chicks'},
        {label: 'Bo, hörda ungar', id: 'Nest, audible chicks'},
        {label: 'Misslyckad häckning', id: 'Failed '},
        {label: 'Ruvande', id: 'Ruvande'},
        {label: 'Äggskal', id: 'Äggskal'},
        {label: 'Föda åt ungar', id: 'Föda åt ungar'},
        {label: 'Bär exkrementsäck', id: 'Bär exkrementsäck'},
        {label: 'Besöker bebott bo', id: 'Besöker bebott bo'},
        {label: 'Pulli/nyligen flygga ungar', id: 'Pulli/nyligen flygga ungar'},
        {label: 'Nyligen använt bo', id: 'Nyligen använt bo'},
        {label: 'Avledningsbeteende', id: 'Avledningsbeteende'},
        {label: 'Bobygge', id: 'Bobygge'},
        {label: 'Ruvfläckar', id: 'Ruvfläckar'},
        {label: 'Upprörd, varnande', id: 'Upprörd, varnande'},
        {label: 'Bobesök?', id: 'Bobesök?'},
        {label: 'Parning/parningsceremonier', id: 'Parning/parningsceremonier'},
        {label: 'Permanent revir', id: 'Permanent revir'},
        {label: 'Par i lämplig häckbiotop', id: 'Par i lämplig häckbiotop'},
        {label: 'Spel/sång', id: 'Spel/sång'},
        {label: 'Obs i häcktid, lämplig biotop', id: 'Obs i häcktid, lämplig biotop'},
        {label: 'Rastande', id: 'Rastande'},
        {label: 'Stationär', id: 'Stationär'},
        {label: 'Förbiflygande', id: 'Förbiflygande'},
        {label: 'Födosökande', id: 'Födosökande'},
        {label: 'Lockläte, övriga läten', id: 'Lockläte, övriga läten'},
        {label: 'Revir, ej häckning', id: 'Revir, ej häckning'},
        {label: 'Ringmärkt', id: 'Ringmärkt'},
        {label: 'Individmärkt', id: 'Individmärkt'},
        {label: 'Sträckförsök', id: 'Sträckförsök'},
        {label: 'Sträckande', id: 'Sträckande'},
        {label: 'Sträckande N', id: 'Sträckande N'},
        {label: 'Sträckande NO', id: 'Sträckande NO'},
        {label: 'Sträckande O', id: 'Sträckande O'},
        {label: 'Sträckande SO', id: 'Sträckande SO'},
        {label: 'Sträckande S', id: 'Sträckande S'},
        {label: 'Sträckande SV', id: 'Sträckande SV'},
        {label: 'Sträckande V', id: 'Sträckande V'},
        {label: 'Sträckande NV', id: 'Sträckande NV'},
        {label: 'Död, krockat med kraftledning', id: 'Död, krockat med kraftledning'},
        {label: 'Död, krockat med vindkraftverk', id: 'Död, krockat med vindkraftverk'},
        {label: 'Död, krockat med fönster', id: 'Död, krockat med fönster'},
        {label: 'Död, krockat med fyr', id: 'Död, krockat med fyr'},
        {label: 'Trafikdödad', id: 'Trafikdödad'},
        {label: 'Död, krockat med flygplan', id: 'Död, krockat med flygplan'},
        {label: 'Död, krockat med staket', id: 'Död, krockat med staket'},
        {label: 'Dödad av elektricitet', id: 'Dödad av elektricitet'},
        {label: 'Drunknad i fiskenät', id: 'Drunknad i fiskenät'},
        {label: 'Dödad av predator', id: 'Dödad av predator'},
        {label: 'Död av sjukdom/svält', id: 'Död av sjukdom/svält'},
        {label: 'Funnen död', id: 'Funnen död'},
        {label: 'Färska spår', id: 'Färska spår'},
        {label: 'Äldre spår', id: 'Äldre spår'},
        {label: 'Färsk spillning', id: 'Färsk spillning'},
        {label: 'Äldre spillning', id: 'Äldre spillning'}
    ];

    return ObservationAddChoicesService;

}]);