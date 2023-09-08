const input = require('readline-sync')

const clasificarNumero = () => {
    let numeroMasCercano;
    for (let i = 0; i < 3; i++) {
        let numero = input.questionInt('Ingrese un numero: ');

        if (i == 0) {
            numeroMasCercano = numero;
        } else if (Math.abs(numero) < Math.abs(numeroMasCercano)) {
            numeroMasCercano = numero;
        }
    }

    return numeroMasCercano;
}

console.log(`El numero mas cercano a 0 es ${clasificarNumero() < 0 ? Math.abs(clasificarNumero()) : clasificarNumero()}`);
