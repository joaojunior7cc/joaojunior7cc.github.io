//Def. do nome que sera invocado por Ctrl:contatosAPI
angular.module("mygithub").factory("contatosAPI", function ($http, configValue) {
    var _getContatosJSON = function () {
        console.log(configValue.baseUrlJSON + "/contatos.json");
        return $http.get(configValue.baseUrlJSON + "/contatos.json");
    };

    return {
        getContatosJSON: _getContatosJSON
    };
});