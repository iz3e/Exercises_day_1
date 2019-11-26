var i = 1
var alto = 7  
var l = ''
const piramide = function(alto) {
    for(i = 1; i <= alto; i++){
        l += '#'
        console.log(l)
    }
}
console.log(piramide)