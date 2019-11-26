const palabra  = "kakkerlak";
const letras = palabra.split("");
//console.log(letras);
var counter = {};
letras.forEach(function(letra) {
  if (!counter.hasOwnProperty(letra)) {
    counter[letra] = 0
  }
  counter[letra] += 1;
});
//console.log(typeof(counter.a))
var res = counter.a + counter.e + counter.r +counter.l
console.log('Total de letras: ' + res);
