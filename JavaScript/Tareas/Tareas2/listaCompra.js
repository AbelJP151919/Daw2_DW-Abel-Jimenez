const promt = require('prompt-sync')();

let listaCompra = [];
let producto;


function añadirProducto(producto) {
do {
    producto = promt('Introduce un producto para la lista de la compra (No introduzcas nada para acabar): ');

    listaCompra.push(producto);
} while (producto.toLowerCase() !== '');

if (producto.toLowerCase() !== '') {
    listaCompra.push(producto);
}}
añadirProducto(producto);

console.log('Lista de la compra:' + listaCompra);