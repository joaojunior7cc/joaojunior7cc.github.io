/* Aula 12:  O Controller permite a definição de uma API que pode ser comparilhadas com outras diretivas
        */
angular.module("mygithub").directive("uiAccordions",function () {
    return{
        controller: function ($scope, $element, $attrs) {//Constructor Function
            var accordions = [];

            this.registerAccordion = function (accordion) {//this: visivel
                accordions.push(accordion);
            };
            this.closeAll = function () {
                accordions.forEach( function (accordion) {//this: visivel
                    accordion.isOpened = false;
                });
            };
        }
    };
});
angular.module("mygithub").directive("uiAccordion",function () {
    return{
        templateUrl: "view/accordion.html",//Nao fica legal colocar aqui uma div com codigo inteiro, melhor chamar uma arquivo.html
        transclude: true,//a message vai atras do transclude
        scope:{//Fechar o scopde desta diretiva
            title:"@"//para nome iguai usa(aqui: title, la no accordion.html: {{title}}): @
        },
        require: "^uiAccordions",/*com require eu posso acessar a API da diretiva uiAccordions
                                   usa o ^ pq ,nesse caso, uiAccordion nao esta no msm elemento <tag> que que uiAccordions */

        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);//metodo de uiAccordions acessado aqui por causa do require acima.
            scope.open = function () {
                //ctrl.closeAll();//metodo de uiAccordions acessado aqui por causa do require acima.
                //scope.isOpened = !scope.isOpened;;
                if(!scope.isOpened){//se ele esta fechado
                    ctrl.closeAll();//metodo de uiAccordions acessado aqui por causa do require acima.
                    scope.isOpened = true;
                }else{
                    scope.isOpened = false;
                }
            };
        }
    };
});
