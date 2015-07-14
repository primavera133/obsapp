angular.module('obsapp').factory('observationSuggestService', [function () {
    'use strict';

    var ObservationSuggestService = {};


    var localList = [
        {en: 'Blue tit', sv: 'Blåmes', sc: 'Parus caeruleus'},
        {en: 'Great tit', sv: 'Talgoxe', sc: 'Parus major'}
    ];

    ObservationSuggestService.getNames = function () {
        return new Bloodhound({
            datumTokenizer: function (d) {
                var datumTokensEn = Bloodhound.tokenizers.whitespace(d.en);
                var datumTokensSv = Bloodhound.tokenizers.whitespace(d.sv);
                var datumTokensSc = Bloodhound.tokenizers.whitespace(d.sc);
                return datumTokensEn.concat(datumTokensSv).concat(datumTokensSc);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: localList
        });
    };

    return ObservationSuggestService;

}]);