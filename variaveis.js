//var

//var altura =5;
//var comprimento =7;

//area = altura *comprimento;

//console.log(area);

//hoje em dia é mais recomendado utilizar o let devido a provaveis bugs que podem ocorrer ao utilizar var.

let forma = 'triangulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma == 'retangulo'){
    area = altura * comprimento;
} else{
    area = (altura * comprimento) / 2;
}
console.log(area);