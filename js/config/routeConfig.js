/*todo .config so recebede serviço do tipo Provider e constant*/

/*  Este comentario se baseira nas videos aulas de angular com branas!
    A implementacao do routeConfig impacta diretamente nos servicos (como contatoAPI); 
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
    $routeProvider.when("/home", {//definindo uma rota /perfil
        templateUrl: "view/home.html",//eh quem ira ser renderizado quando fizer /perfil
        // controller: "homeCtrl" //Removido por travar qdo selecionado dinamic. outro usuario
                                  //Provalv. o motivo seja: esta eh uma outra "instancia" do homeCtrl, ou seja, diferente do homeCtrl la no body do index.html   
    });
    $routeProvider.when("/perfil", {//definindo uma rota /perfil
        templateUrl: "view/perfil.html",//eh quem ira ser renderizado quando fizer /perfil
        // controller: "homeCtrl" //Removido por travar qdo selecionado dinamic. outro usuario
                                  //Provalv. o motivo seja: esta eh uma outra "instancia" do homeCtrl, ou seja, diferente do homeCtrl la no body do index.html   
    });
    $routeProvider.when("/curriculo", {
        templateUrl: "view/curriculo.html",
        // controller: "homeCtrl"
    });    
    $routeProvider.when("/cursos", {
        templateUrl: "view/menucursos.html",
        // controller: "homeCtrl"
    }); 
    $routeProvider.when("/angularjs", {
        templateUrl: "view/cursos/angularjs/contatos.html",
        // controller: "listaTelefonicaCtrl",
        // resolve: {
        //     contatos: function (contatosAPI) {
        //         return contatosAPI.getContatosJSON();
        //     }
        // }
    }); 
    $routeProvider.when("/angularjs/contatonovo", {
        templateUrl: "view/cursos/angularjs/contatoNovo.html",
        // controller: "listaTelefonicaCtrl",
        // resolve: {
        //     contatos: function (contatosAPI) {
        //         return contatosAPI.getContatosJSON();
        //     }
        // }
    }); 
    $routeProvider.when("/github", {/* mantida so para teste (esta dando erro quando exibida por view) */
        templateUrl: "view/github.html"
    });
    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });
    $routeProvider.otherwise({redirectTo: "/home"});//se digitar uma rota invalida eh redirecionado para esta
});