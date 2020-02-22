
angular.module("mygithub").controller("homeServCtrl",function ($scope,usuariosAPIService,serialGeneratorService) {
    $scope.usuarios = [];
    $scope.usuario = [];  
    $scope.serial = "";

    //dados JSON
    var carregarUsuarios = function () {
        usuariosAPIService.getUsuarios().then(function(response) {
            console.log('GET OK ');
            $scope.usuarios = response.data.usuarios;
            $scope.usuario = $scope.usuarios[0];
            //console.log($scope.usuarios);
            console.log($scope.usuario);
        },function (e) {
            console.log("Algo deu errado no GET: "+ e);
        });    
    };

     //dados JSON
    $scope.addUsuario = function (usuario) {
        usuariosAPIService.saveUsuarios(usuario).then(function(response) {
            console.log('POST OK ');
            delete $scope.usuario;
        },function (e) {
            console.log("Algo deu errado no POST: "+ e);
        });
    };

    carregarUsuarios();
    console.log(serialGeneratorService.generate());
} );