angular.module("mygithub").factory("usuariosAPIService",function ($http,configValue) {

    var _getPagExtJSON = function () {
        //console.log(configValue.baseUrlJSON+"/usuarios");
        return $http.get("https://getbootstrap.com.br/");
    };
    var _getUsuariosJSON = function () {
        //console.log(configValue.baseUrlJSON+"/usuarios");
        return $http.get(configValue.baseUrlJSON+"/usuarios.json");
    }; 
    var _getUsuariosBack = function () {
        //console.log(configValue.baseUrlBack+"/usuarios");
        return $http.get(configValue.baseUrlBack+"/usuarios");
    };    

    var _saveUsuariosJSON = function (usuario) {
        //console.log(config.baseUrlValue+"/usuarios.json");
        return $http.post(configValue.baseUrlJSON+"/usuarios.json",usuario);
    };

    var _saveUsuariosBack = function (usuario) {
        //console.log(config.baseUrlValue+"/usuarios.json");
        return $http.post(configValue.baseUrlJBack+"/usuarios",usuario);
    };
    
    return{
        getPagExtJSON : _getPagExtJSON,
        getUsuariosJSON : _getUsuariosJSON,
        getUsuariosBack : _getUsuariosBack,
        saveUsuariosJSON : _saveUsuariosJSON,
        saveUsuariosBack : _saveUsuariosBack
    };
});