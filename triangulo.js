var i,r
function piramide(alto) {
    for(i = 1; i <= alto; i++){
        for(r = 0; r < i; r++){
            console.log('#')
        }
    console.log('\n')
    }
}

console.log(piramide(7))