//eh obrigatorio na nomeclatura terminar com Provider:  serialGeneratorServiceProvider
//se foi definido como serialGenerator2, entao          serialGeneratorService2Provider
//O angular define isso internamente
//Servicos do tipo .config so podera configurar servico definidos como sendo do tipo Provider
angular.module("mygithub").config(function (serialGeneratorProvider) {//serialGenerator
    serialGeneratorProvider.setLength(20);
    console.log("SerialGeneratorProviader config: "+serialGeneratorProvider.getLength());
});