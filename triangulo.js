var i
var l = ''
function piramide(alto) {
    for(i = 1; i <= alto; i++){
        l += '#'
        console.log(l)
    }
}

console.log(piramide(7))