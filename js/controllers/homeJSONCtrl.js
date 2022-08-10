
angular.module("mygithub").controller("homeCtrl",function ($scope,usuariosAPIService,serialGenerator,contatosAPI,operadorasAPI) {
    $scope.loaded=0;
    $scope.usuarios = [];
    $scope.usuario = []; 
    $scope.userselect=1; // usuario padrao
    $scope.curriculos = [];
    $scope.curriculo = [];
    $scope.color = "verde";
    $scope.textoletreiro = "Olá, seja bem-vindo...";


    // ListaTelefonica
    $scope.contatos = [];
    $scope.contato = [];
    $scope.operadoras=[];
    $scope.operadora=[];
    console.log("Entrou no HomeCrl!");
    console.log($scope.userselect);



    $scope.setCor = function (cor) {
        $scope.color = cor;
        console.log(cor);
    };

    $scope.setUser = function (idUser) {
        $scope.userselect = idUser;
        $scope.usuario = $scope.usuarios[idUser];
        $scope.curriculo = $scope.curriculos[idUser];
        console.log($scope.userselect);
        console.log($scope.usuario);
    };
    
    $scope.setAPI = function (loaded) {
        $scope.loaded = loaded;
        selectAPI();
    };

    var carregarLTContatosAPI = function () {
        contatosAPI.getContatosAPI().then(function(response) {
            
            console.log('GET HOME OK carregarLTContatosAPI');
            $scope.contatos = response.data.data.contatos;
            $scope.contato = $scope.contatos[$scope.userselect];

            console.log($scope.contatos);
            
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET CONTATOS: "+ e;
            console.log($scope.erro);
        });      
    };    
    //dados JSON
    var carregarLTContatosJSON = function () {
        contatosAPI.getContatosJSON().then(function(response) {
            
            console.log('GET HOME OK ');
            $scope.contatos = response.data.contatos;
            $scope.contato = $scope.contatos[$scope.userselect];

            console.log($scope.contatos);
            
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET CONTATOS: "+ e;
            console.log($scope.erro);
        });      
    };
    var carregarLTOperadorasAPI = function () {
        operadorasAPI.getOperadorasAPI().then(function(response) {
            
            console.log('GET HOME OK carregarLTOperadorasAPI');
            $scope.operadoras = response.data.data.operadoras;
            $scope.operadora = $scope.operadoras[$scope.userselect];

            console.log($scope.operadoras);
            
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET OPERADOREAS: "+ e;
            console.log($scope.erro);
        });      
    };
    //dados JSON
    var carregarLTOperadorasJSON = function () {
        operadorasAPI.getOperadorasJSON().then(function(response) {
            
            console.log('GET HOME OK ');
            $scope.operadoras = response.data.operadoras;
            $scope.operadora = $scope.operadoras[$scope.userselect];

            console.log($scope.operadoras);
            
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET OPERADOREAS: "+ e;
            console.log($scope.erro);
        });      
    };
    //dados JSON
    var carregarUsuariosAPI = function () {
        usuariosAPIService.getUsuariosAPI().then(function(response) {
            
            console.log('GET HOME OK carregarUsuariosAPI');   
            console.log(response.data);
            $scope.usuarios = response.data.data.usuarios;         
            $scope.usuario = $scope.usuarios[$scope.userselect];

            $scope.curriculos = response.data.curriculos;
            $scope.curriculo = $scope.curriculos[$scope.userselect];
            console.log($scope.usuarios);
            //console.log($scope.usuario);
            //console.log($scope.experiencias);
            //console.log($scope.curriculo);
            //console.log($scope.userselect);
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET USUARIOS: "+ e;
            console.log($scope.erro);
        });    
    };
    var carregarUsuariosJSON = function () {
        usuariosAPIService.getUsuariosJSON().then(function(response) {
            
            console.log('GET HOME OK carregarUsuariosJSON');   
            console.log(response.data);
            $scope.usuarios = response.data.usuarios;         
            $scope.usuario = $scope.usuarios[$scope.userselect];

            $scope.curriculos = response.data.curriculos;
            $scope.curriculo = $scope.curriculos[$scope.userselect];
            console.log($scope.usuarios);
            //console.log($scope.usuario);
            //console.log($scope.experiencias);
            //console.log($scope.curriculo);
            //console.log($scope.userselect);
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET USUARIOS: "+ e;
            console.log($scope.erro);
        });    
    };
     //dados JSON
    $scope.addUsuario = function (usuario) {
        usuariosAPIService.saveUsuariosJSON(usuario).then(function(response) {
            console.log('POST HOME OK ');
            delete $scope.usuario;
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET: "+ e;
            console.log($scope.erro);
        });
    };

    var selectAPI = function () {
        console.log("loaded: "+$scope.loaded);     
        if ($scope.loaded == 0) {
            console.log("LOADING JSON");     
            carregarUsuariosJSON();
            carregarLTContatosJSON();
            carregarLTOperadorasJSON();
        } else {   
            console.log("LOADING API");     
            carregarUsuariosAPI();
            carregarLTContatosAPI();
            carregarLTOperadorasAPI();
        } 
    };
    
    selectAPI();
    console.log("Saindo do HomeCtrl: "+serialGenerator.generate());
    // $scope.cacheObject.removeAll();
    // $scope.cacheObject.destroy();
} );