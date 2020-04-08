//Def. do nome que sera invocado por Ctrl:contatosAPI
angular.module("mygithub").factory("contatosAPI", function ($http, configValue) {
    var _getContatosAPI = function () {
        console.log(configValue.baseUrlAPI + "/contatos.json");
        return $http.get(configValue.baseUrlAPI + "/contatos.json");
    };
    var _getContatosJSON = function () {
        console.log(configValue.baseUrlJSON + "/contatos.json");
        return $http.get(configValue.baseUrlJSON + "/contatos.json");
    };
    return {
        getContatosAPI: _getContatosAPI,
        getContatosJSON: _getContatosJSON
    };
});