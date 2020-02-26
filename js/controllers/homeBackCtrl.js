
angular.module("mygithub").controller("homeCtrl",function ($scope,usuariosAPIService,serialGenerator) {
    $scope.usuarios = [];
    $scope.usuario = [];  
    //$scope.serial = "";

    console.log("controller");
    //dados Back-end
    var carregarUsuarios = function () {
        usuariosAPIService.getUsuariosBack().then(function(response) {
            console.log('GET OK ');
            console.log(response.data);
            $scope.usuarios = response.data;
            $scope.usuario = $scope.usuarios[0];
            //console.log($scope.usuarios);
            console.log($scope.usuario);
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET: "+ e;
            console.log($scope.erro);
        });    
    };

     //dados Back-end
    $scope.addUsuario = function (usuario) {
        usuariosAPIService.saveUsuariosBack(usuario).then(function(response) {
            console.log('POST OK ');
            delete $scope.usuario;
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no POST: "+ e;
            console.log($scope.erro);
        });
    };

    carregarUsuarios();
    console.log(serialGenerator.generate());
} );