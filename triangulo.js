// creacion de las variables
var i = 1
var alto = 7  
var l = ''
// funcion que va a imprimir el triangulo dependiendo del valor de alto
const piramide = function(alto) {
    for(i = 1; i <= alto; i++){
        l += '#'
        console.log(l)
    }
}
// ejecuccion de la funcion
console.log(piramide)