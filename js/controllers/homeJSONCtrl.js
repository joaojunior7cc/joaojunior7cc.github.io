
angular.module("mygithub").controller("homeJSONCtrl",function ($scope,usuariosAPIService,serialGenerator) {
    $scope.usuarios = [];
    $scope.usuario = [];  
    $scope.curriculos = [];
    $scope.curriculo = [];
    $scope.corbh = "verde";
    
    console.log("controller");
    //dados JSON
    var carregarUsuarios = function () {
        usuariosAPIService.getUsuariosJSON().then(function(response) {
            i = 0;
            console.log('GET OK ');
            $scope.usuarios = response.data.usuarios;
            $scope.usuario = $scope.usuarios[i];
            $scope.curriculos = response.data.curriculos;
            $scope.curriculo = $scope.curriculos[i];
            //console.log($scope.usuarios);
            console.log($scope.experiencias);
            console.log($scope.curriculo);
            //console.log($scope.usuario);
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