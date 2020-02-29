//Def. do nome que sera invocado por Ctrl:contatosAPI
angular.module("mygithub").factory("contatosAPI", function ($http, configValue) {
    var _getContatosJSON = function () {
        return $http.get(configValue.baseUrlJSON + "/listatelefonicaContatos.json");
    };


    return {
        getContatosJSON: _getContatosJSON
    };
});