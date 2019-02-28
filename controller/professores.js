var professoresModulo = angular.module('professoresModulo',[]);

professoresModulo.controller("professoresController",function ($scope){
    $scope.professores = [
        {codigo:1, nome: 'João Júnior', email: 'jjr@email.com', fone: '11 999884455'},
        {codigo:2, nome: 'Júnior João', email: 'jjr2@email.com', fone: '11 977884455'}

    ];
});