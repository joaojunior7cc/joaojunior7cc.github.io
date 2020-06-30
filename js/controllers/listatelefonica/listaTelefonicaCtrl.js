/*busca listatelefonica*/
//Aula 14 - na injecao de  contatos e operadoras (em listaTelefonicaCtrl), ambos sao definido no routeConfig 
//angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope,contatosAPI,operadorasAPI,serialGenerator){
angular.module("mygithub").controller("listaTelefonicaCtrl",function($scope,contatos){
    $scope.app = "Lista Telefônica";
    $scope.contatos = contatos.data;
    // $scope.operadoras= operadoras.data;

    /*
        var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data, status) {
            data.forEach(function (item) {
                item.serial = serialGenerator.generate();
            });
            $scope.contatos =data;
            console.log($scope.contatos);
        }).error(function (data) {//tem outros parametros..
            $scope.err=true;
            $scope.error = "Nao foi possivel carregar os dados: " + data;
        });
    };
     */
    //funcação reescrita
    //gernerationContatos apagado!
    //adiconarContato apagado!
    $scope.apagarContatos = function(contatos){
        //filter : permite passar uam função
        $scope.contatos = contatos.filter(function (contato) {
            if(!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao=campo;
        $scope.direcaoDaOrdenacao=!$scope.direcaoDaOrdenacao;
    };
});