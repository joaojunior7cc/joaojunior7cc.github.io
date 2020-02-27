
angular.module("mygithub").controller("pagExtCtrl",function ($scope,usuariosAPIService) {
    $scope.paginaexterna1 = "<h1>Pagina Externa 1 Ctrnl</h1>";

    console.log("Entrou no pagExtCrl!");

    var carregarPaginaExterna = function () {
        usuariosAPIService.getPagExtJSON().then(function(response) {
            
            console.log('GET PAGEXT OK ');
            $scope.paginaexterna1 += response.data;
            console.log( $scope.paginaexterna1);
        },function (e) {
            $scope.err = true;
            $scope.erro = "Algo deu errado ["+$scope.err+"] no GET: "+ e;
            console.log($scope.erro);
        });  
    };
    carregarPaginaExterna();
} );