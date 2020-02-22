/*aula 09: 20:00min
    Este filtro coloca os 3 pontos no final (...)
*/
angular.module("mygithub").filter("ellipsis",function () {
    return function (input,ini,size) {
        //Se o nome(input) for menor/igual, so retorno
        if(input.length <= size) return input;
    /*                       default: if(false || 2)   */
        var output = input.substring(ini,(size || 2)) + "...";
        return output;
    };
});
