function esCurioso(numero) {
    // total de la suma de los digitos
    let suma = 0;
    // variable temporal para dividir los digitos
    let temp = numero;

    // Mientras que temp siga teniendo digitos válidos
    while (temp > 0) {

        // se asigna el último digito del número a la variable "digito"
        let digito = temp % 10;
        // se va sumando el cubo de cada digito y se almacena en la suma total
        suma += digito ** 3;
        // se elimina el ultimo digito del número para poder avanzar
        temp = Math.floor(temp / 10);
    }

    // si la suma total del cubo de todos los digitos es igual al número introducido devuelve true y en caso contrario false
    return suma === numero;
}

function obtenerNumerosCuriosos(cantidad) {
    // Array que almacena los números curiosos
    let curiosos = [];
    // Se empieza a contar por 1
    let numero = 1;

    // El bucle se ejecuta hasta que el array tiene una cantidad de números equivalente a la cantidad introducida
    while (curiosos.length < cantidad) {
        // Si el numero es curioso se introduce en el array
        if (esCurioso(numero)) {
            curiosos.push(numero);
        }
        // Aumenta la cuenta
        numero++;
    }

    // devuelve el array
    return curiosos;
}
