/*
este es un ejemplo que no fue 100%, tome algunos pedazos de codigo
que me encontre sobre la recursividad y arme el siguente codigo:
*/
// declaracion de la variable
var num = 7
// inicio de la funcion asi como del loop if
function fibo(f){
    if(f < 2)
    return f;
    //se vuelve a llamar a la funcion
    return fibo(f - 1) + fibo(f - 2);
}
// imprimimos el resultado con el for
for(i=0; i<num; i++){
    console.log(fibo(i))
}