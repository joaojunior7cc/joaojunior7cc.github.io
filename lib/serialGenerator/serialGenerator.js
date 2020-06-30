/*Serviço do tipo provider pode ser configurado externamente*/

angular.module("serialGenerator",[]);//criado na aula 13
angular.module("serialGenerator").provider("serialGenerator",function () {//criado na aula 13
//angular.module("listaTelefonica").provider("serialGenerator",function () {
    console.log("Entrou no SerialGenerator!");
    var _length = 10;

    this.getLength =function () {
        return _length;
    };
    this.setLength =function (length) {
        _length = length;
    };
    this.$get = function () {
        return {
            generate: function () {
                var serial ="";
                var num1ini=48,num1le=10;
                var num2ini=65,num2le=26;
                var num3ini=98,num3le=26;
                while(serial.length < _length){
                    serial+= String.fromCharCode(Math.floor(Math.random()*num1le)+num1ini);
                    serial+= String.fromCharCode(Math.floor(Math.random()*num2le)+num2ini);
                    serial+= String.fromCharCode(Math.floor(Math.random()*num3le)+num3ini);
                }
                return serial;
            }
        };
    };
});