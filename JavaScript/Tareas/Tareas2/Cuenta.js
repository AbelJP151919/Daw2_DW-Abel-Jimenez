const prompt = require('prompt-sync')();

class Cuenta {
    
    constructor (titular, saldo){
        this._titular = titular;
        this._saldo = saldo;
    }



    set titular (nuevoTitular){
        this._titular = nuevoTitular;
    }
    get titular(){
        return this._titular;
    }
    set saldo (nuevoSaldo){
        this._saldo = nuevoSaldo;
    }
    get saldo(){
        return this._saldo;
    }

    ingresarDinero(){
        let numeroIngreso = Number(prompt("Introduce un numero a ingresar: "));
        if (numeroIngreso > 0) {
            this._saldo += numeroIngreso;
            console.log("Tu nuevo saldo es: " + this._saldo);
        } else {
            console.log("Ingreso erróneo. Por favor, introduce una cantidad positiva.");
        }
    }
    
    sacarDinero(){
        let numeroSacar = prompt("Introduce un numero a sacar: ");
        this._saldo -=  numeroSacar;
        if(this._saldo < 0){
            this._saldo = 0
        }
        console.log("Tu nuevo saldo es: " + this._saldo);
    }

   


}
        let cuenta = new Cuenta("Carlos", 100);
        cuenta.ingresarDinero();
        cuenta.sacarDinero();
        cuenta.ingresarDinero();
        cuenta.sacarDinero();
