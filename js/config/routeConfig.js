/*todo .config so recebede serviço do tipo Provider e constant*/

/* A implementacao do routeConfig impacta diretamente nos servicos (como contatoAPI); 
    route acumula os Ctrl e suas depedencias (no resolve:{}),
    ou seja, (p.e.) contatoAPI deixa de ser injecato nos Ctrls, como no caso de listaTelefonicaCtrl,
    e passa a ser usado aqui, no resolve:{}. 

    OBS: Houve uma simplificao da implementacao para utilizacao dos APIs dentro dos Ctrls:
          Antes, a forma de carregar os dados era feita atraves de :
            usuariosAPI.getUsuarios().then( function(){},function(){} );
          Agora basta injetar (p.e. usuarios - definido no resolve abaixo) nos Ctrls e atribuir diretamente:
             $scope.usuarios = usuarios.data;

         Para ver tal efeito, basta ver a edicao do(s) metodo(s) no arquivo /controllers/listaTelefonicaCtrl.js 
      */
angular.module("mygithub").config(function ($routeProvider) {
    $routeProvider.when("/perfil", {//definindo uma rota /usuarios
        templateUrl: "view/perfil.html",//eh quem ira ser renderizado quando fizer /usuarios
        controller: "homeCtrl"
    });
    $routeProvider.when("/competencias", {//definindo uma rota /usuarios
        templateUrl: "view/competencias.html",//eh quem ira ser renderizado quando fizer /usuarios
        controller: "homeCtrl"
    });
    $routeProvider.when("/curriculo", {
        templateUrl: "view/curriculo.html"
    });    
    $routeProvider.when("/github", {
        templateUrl: "view/github.html"
    });
    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });
    $routeProvider.otherwise({redirectTo: "/perfil"});//se digitar uma rota invalida eh redirecionado para /contatos
});