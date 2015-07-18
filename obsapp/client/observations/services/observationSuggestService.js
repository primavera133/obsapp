angular.module('obsapp').factory('observationSuggestService', ['$meteor', function ($meteor) {
    'use strict';
    //TODO: Remove use of local list, use async remote

    var ObservationSuggestService = {};

    var names = $meteor.collection(Obsapp.Names);

    ObservationSuggestService.getNamesBloodhound = function () {
        return new Bloodhound({
            datumTokenizer: function (d) {
                var datumTokensEn = Bloodhound.tokenizers.whitespace(d.en);
                var datumTokensSv = Bloodhound.tokenizers.whitespace(d.sv);
                var datumTokensSc = Bloodhound.tokenizers.whitespace(d.sc);
                return datumTokensEn.concat(datumTokensSv).concat(datumTokensSc);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: names
        });
    };

    return ObservationSuggestService;

}]);