/*Aula 09: Filters
    Este filtro transforma a primeira letras do nome em maiusc.
*/
angular.module("mygithub").filter("name",function () {
    //O primeiro param sempre eh o input (pode batizer com qlqr nome)
    return function (input) {
        if(input === undefined) return "Falha no carregamento de dados";
        var listaDeNomes = input.split(" ");
        /*Assista Desvendadndo JavaScrip aula 09*/
        /* map: pega o array, e para cada elemento que tiver, ele vai derrivar um novo array,
                segundo o que for definido no return */
        var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
            /*por expressao regular: se da ou de forma compativel com nome = true*/
            if(/(^da$|^de$)/.test(nome)) return nome;
           return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        //coloco entre cada elemento do array " " 
        return listaDeNomesFormatada.join(" ");
    };
});