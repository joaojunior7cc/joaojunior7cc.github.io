/* AULA 10: DIRECTIVE - Esta diretiva cria um template para msg de alerta!
 
        Como o javaScript é case-sensitive e o HTML é case-insensitive:
        tanto faz escrever uiAlert, uialert, UIALERT... isso eh convertido em ui-Alert,
        tanto que as diretivas ngRepeat eh assim,mas usamos ng-Repeat.

        Por padrao a diretiva compartilha seu escopo de onde é utilizada
        Para saber qual scope: {{$id}}

        template: age parecido com ng-include

        Por padrao, uam diretiva compartilha o msm scope de onde eh utilizada: Saber qual scope {{$id}}
        Podemos isolar seu scope, passando dados por parametro.
        */

angular.module("mygithub").directive("uiAlert",function () {
    return{
        templateUrl: "view/alert.html",//Nao fica legal colocar aqui uma div com codigo inteiro, melhor chamar uma arquivo.html
        
        replace: true, /* Remove a div externa, e fico so com o template
                        * substitui o elemento pelo template da diretiva
                        * serve: para aplicar um tipo de classe seguindo uma hierarquia
                        * p.e.: se criar uma diretiva com nome reservado (title) ela ira aparecer no topo da pagina,
                        *   ao menos que use o replace para remover o elemento...*/

        restrict: "AE", /*Restinge o modo de utilização da diretiva ao atributo, elemento, classe e comentario
                         *           ou uma combinação deles
                         * Tipos:
                         *       A: Restrita ao atributo de elemento:   <div ui-alert></div>
                         *       E: Restrita ao elemento:               <ui-alert></ui-alert>
                         *       C: Restrita a classe do elemento:      <div classe="ui-lart"></div>
                         *       M: Restria ao comentario do elemento:  <!-- directive: alert-->
                         * */

        scope: {/*Definir a propriedade scope: criei um scope isolado (um novo) que deixa de ser acessado la fora...
                * se remover o scope, {{error}} e {{message}], do alert.html, aparecerao no index.html*/

            /*topic:"title" /*desta forma da erro.
                              sol.: usar @:
                                         vincula o valor do atributo diretamente 
                                         a uma propriedade do scope da diretiva*/

            topic: "@title" // enviado do <ui-alert title="Ops, Aconteceu um problema!"></ui-alert>
                            //A string toda passada por parametro vinda do index.html
            //title: "@"    //se tem nomes iguais: {{title}} no alert.html e title: aqui 
                            //basta usar so @ como atalho

            /* message: "=message" isso eh apenas uma exemplo, nao remover o comentario*/
            /*,message: "=" /*O = cria um viculo bi-direcional entre um propriedade do scope do template a uma
                              propriedade do scope da diretiva
                              Dessa vez o que foi enviado por aqui nao foi uma string, 
                              mas sim, repassado a var erro que se encontra no Ctrl    */

        },
        transclude: true   //comentei o ,message:"=" acima para usar o transclude
    };
});