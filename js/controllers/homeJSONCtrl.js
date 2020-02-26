
angular.module("mygithub").controller("homeCtrl",function ($scope,usuariosAPIService,serialGenerator) {
    $scope.usuarios = [];
    $scope.usuario = []; 
    $scope.userselect=0; // usuario padrao
    $scope.curriculos = [];
    $scope.curriculo = [];
    $scope.color = "verde";
    
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

    //dados JSON
    var carregarUsuarios = function () {
        usuariosAPIService.getUsuariosJSON().then(function(response) {
            
            console.log('GET OK ');
            $scope.usuarios = response.data.usuarios;
            $scope.usuario = $scope.usuarios[$scope.userselect];

            $scope.curriculos = response.data.curriculos;
            $scope.curriculo = $scope.curriculos[$scope.userselect];
            //console.log($scope.usuarios);
            //console.log($scope.experiencias);
            //console.log($scope.curriculo);
            //console.log($scope.userselect);
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET: "+ e;
            console.log($scope.erro);
        });    
    };

     //dados JSON
    $scope.addUsuario = function (usuario) {
        usuariosAPIService.saveUsuariosJSON(usuario).then(function(response) {
            console.log('POST OK ');
            delete $scope.usuario;
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET: "+ e;
            console.log($scope.erro);
        });
    };

    carregarUsuarios();
    console.log(serialGenerator.generate());
} );