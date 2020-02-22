angular.module("mygithub").factory("usuariosAPIService",function ($http,configValue) {
    var _getUsuarios = function () {
        //console.log(config.baseUrlValue+"/usuarios.json");
        return $http.get(configValue.baseUrlValue+"/usuarios.json");
    };
    var _saveUsuarios = function (usuario) {
        //console.log(config.baseUrlValue+"/usuarios.json");
        return $http.post(configValue.baseUrlValue+"/usuarios.json",usuario);
    };
    return{
        getUsuarios : _getUsuarios,
        saveUsuarios : _saveUsuarios
    };
});