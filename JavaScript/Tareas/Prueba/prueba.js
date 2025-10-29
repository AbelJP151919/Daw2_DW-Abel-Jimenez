
function mostrarArray(){
    let sumaArray = 0;
    let array = [];
    for(let i = 0; i < 10; i++){

        array.push(Math.floor(Math.random() * 100) + 1);

        console.log(array[i]);
        sumaArray += array[i];
        

    }
        console.log(sumaArray);
        mayorElemento = Math.max(...array);
        console.log(mayorElemento);
}
mostrarArray();