const palabra  = "kakkerlak";
//se usa el split para hacer la palabra un arreglo
const letras = palabra.split("");
//console.log(letras); Solo se uso para ver el resulatdo del arreglo
// se declara un contador
var counter = {};
//se crea un objeto el cual guarda las cantidades 
letras.forEach(function(letra) {
  if (!counter.hasOwnProperty(letra)) {
    counter[letra] = 0
  }
  counter[letra] += 1;
});
//console.log(typeof(counter.a)) ver tipo de dato 
// realizamos la suma
var res = counter.a + counter.e + counter.r +counter.l
//imprimimos la suma
console.log('Total de letras: ' + res);
