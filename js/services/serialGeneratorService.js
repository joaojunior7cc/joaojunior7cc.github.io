/*Serviço do tipo provider pode ser configurado externamente
    Eh o servico que da origem aos outros servicos*/

//Como o configValue.js foi alterado para constant, posso injeta-lo nesse provider se quisesse
//angular.module("listaTelefonica").provider("serialGenerator",function (config) {//nao estou usando este config aqui, foi so para exemplificar... 
angular.module("mygithub").provider("serialGeneratorService",function () {   
    var _length = 10;

    this.getLength =function () {
        return _length;
    };
    this.setLength =function (length) {
        _length = length;
    };
    this.$get = function () {//Constructor
        return {//Factory
            generate: function () {
                var serial ="";
                var num1ini=48,num1le=10;
                var num2ini=65,num2le=26;
                var num3ini=98,num3le=26;
                while(serial.length < _length){
                    serial+= String.fromCharCode(Math.floor(Math.random()*num1le)+num1ini);//FromCharCode: gera string com passagem de um numero
                    serial+= String.fromCharCode(Math.floor(Math.random()*num2le)+num2ini);
                    serial+= String.fromCharCode(Math.floor(Math.random()*num3le)+num3ini);
                }
                return serial;
            }
        };
    };
});