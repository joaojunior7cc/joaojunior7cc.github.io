
angular.module("mygithub").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato) {
    console.log(contato);
    $scope.contato = contato.data;
});
/* nao consegui exibir os detalhes provavelmente por causa do nodejs*/
/**Agora consegui. Erra msm o server.js que faltava (erra diferente do anterior) */