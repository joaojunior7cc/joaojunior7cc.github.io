/*Aula 11: DIRECTIVE - Esta diretiva cria mascaras para inputs.
*   Propriedades:
*       link: Executada depois do template ter sido compilado, podemos utiliza-la para interagir com o DOM,
*             tratando eventos (ou mesmo para definir comportamento assiciado com a lógica da diretiva).
*
*       require: Estabelece um vinculo com outra diretiva, interagindo por meio do controller, 
*                que eh uns dos parametros da funcao link*/
angular.module("mygithub").directive("uiDate",function ($filter) {

    return{
        /*  scope: eh o mesmo scope do ctrl, caso sua direvita nao tenha scope isolado.
                   (nesse caso nao vou isolar o scope - nao eh interessante, se nao esta diretiva perde seu potencial de reuso)
            element: tem toda uma api que devo estudar pelo site do angular (doc)..p.e. jquery lite
            attrs: atributos deste element; qdo scope nao eh isolado (isto eh um problema, neste caso), os attrs ajudam.
                    eu tenho como acessar os atribubos diretamente (name, ngModel,placeholser,type,uiDate...).
            ctrl: Acessa a api de ngModel (link recebe o 4 parametro: ctrl)
                  
        */
        
        require: "ngModel",//com require eu posso acessar a API da diretiva ngModel
        link: function (scope, element, attrs, ctrl) {            
            //Formatando, o que for digitado no input name='date', para dd/mm/aaaa
            var _formatDate = function (date) {
                /*removendo chars: tudo aquilo q nao for digito, substituo por vazio;
                *                  p.e. nao aceita letra*/
                date = date.replace(/[^0-9]+/g,"");
                /*colocar barras: 10/05/2020 */
                if(date.length >2){
                    date = date.substring(0,2)+ "/" + date.substring(2);
                }
                if(date.length>5){
                    date = date.substring(0,5)+ "/" + date.substring(5,9);
                }
                return date;
            };
            
            /*OBS: Nao da pra exibir via console aqui, return: NaN
            console.log(ctrl.$viewValue);
            nete caso, para usar o console eh preciso atribuir-lo a ocorrencia de um event, como logo abaixo
            */

            //Transfomacao do que esta sendo digitado (na hora)...
            element.bind("keyup",function () {//sempre que eu digitar qlqr coisa...
               //console.log(ctrl.$viewValue);
               ctrl.$setViewValue(_formatDate(ctrl.$viewValue));//setando valor formatado no ng-model
               ctrl.$render();/*apos setado, preciso chamar o render,caso contrario,
                                 nao reaparecera componente input name='date'*/
            });


            /*Vamos supor que nao queira como foi feito acima (date como string: 16/02/2020),
              vamos supor que eu queira o tempo em milisegundos...    */
            
            //Transforama data 19/02/2020 em data miliseg...
            var _dataUSAms = function (value) {
                var dataArray = value.split("/");
                var dtUSAms = new Date(dataArray[2],dataArray[1]-1,dataArray[0]).getTime();
                return dtUSAms;
            };
            
            /*Interceptando o bind no scope, 
              ou seja, sem esta funcao o $scope.data ja estaria sendo atribuido.
              Agora, o $scope.data so sera atribuido apos a condicao e return  */
            ctrl.$parsers.push(function (value) {//value = "16/02/2020", p.e.
                //console.log(value);
                if(value.length >9) {// so permitir mandar (interação) com o value >9
                   // return value;//mando para o scope: tempo em mili segundos
                    return _dataUSAms(value);//1581822000000 
                }
            });

            /*
            OBS: Entendo o que esta acontencendo em tempo de execucao:
                    Aqui, neste momento (me refiro neste tempo de execucao): 
                    1- A propriedade/funcao link() sera executada automaticamente, assim que este script for lido.
                        Com isto, tudo dentro dela sera executado tbm!
                    2- Lembre-se que element eh um param de link, por isso sera definido sem chamada (nao eh funcao)!
                        Para definir element foi invocado a funcao bind (este sim eh uma funcao),
                        que setara o novo valor formatado de data em $viewValue.
                        O render() tratara de reatribuir a data-formatada no input name='date' (la no index.html),
                        o que significa: 16/02/2020, p.e., (Neste momento ira aparecer a data no input citado)
                    3- O proximo passo tratara de:
                        3.1 - transformacao da data em data-mili-segundos
                        3.2 - interceptacao da bind no scope (nao permitira atualizao do $scope.date ate finalizado a funcao)
                        Apos isso, o $scope.data tera seu novo valor de data em milisegundos.
                        Por este movito, temos dois tiposs de datas: A data exibida na tela (no input) e data interna (no scope.data)
                    
                    4- Ate aqui eu estou pegando a data (digitada) do input e levando para o controller ($scope.data)
                    
                    5- O ctrl.$formatters faz o contrario disso (4):
                        Ele pega a da vinda do controllers e coloca no input ja fortada para: 19/02/2020, p.e.   
            */

            //Transforma data-mili-segundos em 19/02/2020, p.e.   
           ctrl.$formatters.push(function (value) {
               return $filter('date')(value,"dd/MM/yyyy");
           }); 
        }
    };
});