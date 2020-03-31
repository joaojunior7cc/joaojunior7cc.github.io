/*service  na verdade é uma função construtora: por isso o this.*/
//Def. do nome que sera invocado por Ctrl:operadorasAPI
angular.module("mygithub").service("operadorasAPI",function ($http, configValue) {
    this.getOperadorasJSON = function () {
        console.log(configValue.baseUrlJSON + "/operadoras.json");
        return $http.get(configValue.baseUrlJSON + "/operadoras.json");
    };
});