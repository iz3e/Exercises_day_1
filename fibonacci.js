/*
#Este es un ejemplo que no fue 100%, tome algunos pedazos de codigo
#que me encontre sobre la recursividad y arme el siguente codigo:
*/
var num = 7
function fibo(f){
    if(f < 2)
    return f;
    return fibo(f - 1) + fibo(f - 2);
}
for(i=0; i<num; i++)
    console.log(fibo(i))
