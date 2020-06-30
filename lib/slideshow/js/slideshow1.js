/* Funciona copiando a div do slideshow.html para o index (sem include) */

var interval = 5000;//default

/* Pegando os slides na div: slideshow */
var slidesShow = document.getElementById('slideshow');    
var slides = slidesShow.getElementsByTagName('img'); 
var i = 0;//slides[i]

/* Pegando a div: slidebtn */
var divbtns = document.getElementById('slidebtn');  
var btns;

var startedSlide;//instancia o setTimeout

var setInterval = function (inter=5000,att=false) {    
    if(att){
        interval = inter;        
        console.log("Intervalo definido: "+ interval);
    }
};

var start = function () {
    slidesHidden(0);//esconde todos slides
    startShow(0.01);
};

var slidesHidden = function (s) {
    for (var i=s; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
};

var iNextSlide = function () {      
    if( i >= slides.length-1 ){ i=-1; }// i: reinicia qdo chegar no ultimo
    i++;
};

var btnsOff = function () {   
    for (let j = 0; j < btns.length; j++) {        
        btns[j].style.opacity = "0.2";//transparente
    }
};

var play = function () {
    btnsOff();/* todos transparentes*/
    btns[i].style.opacity = "0.5";//opaco/vivo

    slidesHidden(0);/* esconde todos*/
    slides[i].style.display = "initial";//exibe slide 
    
    iNextSlide();//proximo id slide   
    startShow(interval);//reinicio
};

var startShow = function(interv) { 
    startedSlide = setTimeout("play()",interv);  
};

var clickSlide = function (ind) {
    clearTimeout(startedSlide);//stop slide
    i = ind;//setar indice
    startShow(5);//inicia slide
};


/* buttons */
var insertBtns =function () {
  for (let ind = 0; ind < slides.length; ind++) {
    /* cria btn */
    var btn = document.createElement("BUTTON");
    btn.type = "button";
    btn.id = 'btn'+ind;
    btn.onclick = function () { return clickSlide(ind); };
    /* add btn */
    divbtns.appendChild(btn);
  }  
  //atribuindo os btns
  btns = divbtns.getElementsByTagName('button');
};

insertBtns();
start();
