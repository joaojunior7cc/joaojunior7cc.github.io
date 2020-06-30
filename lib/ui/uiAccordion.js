/* Aula 12:  O Controller permite a definição de uma API que pode sercomparilhadas com outras diretivas
        */
angular.module("uiAccordion",[]);//criado na aula 13

/*  Copiado uiAccordionDirective.js para lib/ui/ui.js
*   o template view/accordion.htm foi copiado/deletado e colado aqui!*/

/*inicializando o modulo */
angular.module("uiAccordion").run(function ($templateCache) {
/*Cria um template:put(nomeDoTemplate, template)*/
    $templateCache.put("view/accordion.html",'<div class="ui-accordion-title" ng-click="open()">{{title}}</div>\n' +
                                             '<div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});/*OBS: Em caso de template GRANDES usasse ferramentas para cria-los, como: grunt-html2js */

angular.module("uiAccordion").directive("uiAccordions",function () {//criado na aula 13
    return{
        controller: function ($scope, $element, $attrs) {
            var accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };
            this.closeAll = function () {
                accordions.forEach( function (accordion) {
                    accordion.isOpened = false;
                });
            };
        }
    };
});

angular.module("uiAccordion").directive("uiAccordion",function () {
//angular.module("listaTelefonica").directive("uiAccordion",function () {
    return{
/*Creio eu que ele usa o template nesse local...*/
        templateUrl: "view/accordion.html",//criado la em cima no templateCache()
        transclude: true,
        scope:{
            title:"@"
        },
        require: "^uiAccordions",
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