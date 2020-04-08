/*service  na verdade é uma função construtora: por isso o this.*/
//Def. do nome que sera invocado por Ctrl:operadorasAPI
angular.module("mygithub").service("operadorasAPI",function ($http, configValue) {
    this.getOperadorasAPI = function () {
        console.log(configValue.baseUrlAPI + "/operadoras.json");
        return $http.get(configValue.baseUrlAPI + "/operadoras.json");
    };
    this.getOperadorasJSON = function () {
        console.log(configValue.baseUrlJSON + "/operadoras.json");
        return $http.get(configValue.baseUrlJSON + "/operadoras.json");
    };
});