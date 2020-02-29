/*busca listatelefonica*/
/*Aula 14                                                                            removi: operadorasAPI */
angular.module("mygithub").controller("contatoNovoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras) {
    //$scope.operadoras = [];
    $scope.operadoras = operadoras.data;

    /*removido para usar o resolve:{ }
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data, status) {
            $scope.operadoras =data;
        });
    };
    */

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");//volta para /contatos
        });
    };
    //carregarOperadoras();
});
