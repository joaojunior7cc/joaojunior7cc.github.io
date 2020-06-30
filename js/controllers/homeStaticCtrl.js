
angular.module("mygithub").controller("homeCtrl",function ($scope,$http) {
    //dados staticos
    $scope.usuarios = [];
    $scope.usuarios = [
        {id:"1", nome:"João Júnior", profissao:"Desenvolvedor Web", nivel:"Jr", stack:"Full Stack", linguagens:"Java", telefone:"9999-2222", data:"22/02/2020", imgAvatar:"img/avataaars.svg", icon:"fab fa-java"},
        {id:"2", nome:"João Vitor", profissao:"Web Designer",nivel:"Sr", stack:"Front-end", linguagens:"HTML, CSS e JavaScript", telefone: "8888-1111", data: "29/02/2021", imgAvatar: "img/avataaars.svg", icon:"fab fa-java"}
    ];

    $scope.usuario =  $scope.usuarios[0];
    console.log($scope.usuario);
} );