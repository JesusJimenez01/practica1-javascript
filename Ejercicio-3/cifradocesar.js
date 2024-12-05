// Diccionario con los alfabetos disponibles
const alfabetos = {
    'castellano' : 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    'ingles' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

function actualizarmaxrot() {
        // Alfabeto seleccionado (castellano/ingles)
        let alfabeto = document.getElementById("alfabeto").value;

        // Asigna el número de rotación máxima dependiendo del alfabeto seleccionado
        document.getElementById("rot").max = alfabetos[alfabeto].length - 1;
}

function descifrar() {

    // Alfabeto seleccionado (castellano/ingles)
    let alfabeto = document.getElementById("alfabeto").value;

    // Accede al valor del diccionario para guardar el alfabeto que se quiere usar
    let alfabeto_seleccionado = alfabetos[alfabeto];

    // Guarda el nivel de rotacion
    let rot = parseInt(document.getElementById("rot").value);

    // Guarda el texto a descifrar
    let texto = document.getElementById("texto").value;

    // Inicializa el string en el que vor a guardar el resultado
    let resultado = '';

    // Recorro el texto letra a letra
    for (let i = 0; i < texto.length; i++) {

        // Guardo la letra en la que me encuentro
        let letra = texto.charAt(i);

        // Guardo el indice de la letra almacenada anteriormente para poder actualizar el indice, si no encuentra la letra en el diccionario devuelve -1
        let indice = alfabeto_seleccionado.indexOf(letra);

        // Si encuentra la letra actualizo el indice
        if (indice !== -1) {

            // Calcular el nuevo índice
            let nuevoIndice = (indice - rot + alfabeto_seleccionado.length) % alfabeto_seleccionado.length;

            // Las letras descifradas se van añadiendo a un string
            resultado += alfabeto_seleccionado[nuevoIndice];

        } else { // Si no encuentra la letra se queda igual

            // Mantener caracteres que no están en el alfabeto y añadirlo al string
            resultado += letra;
        }
    }

    // Muestro el texto descifrado y lo pongo de color rojo
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("resultado").style.color = "red";

}

