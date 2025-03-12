
let amigos = [];
let inputAmigo = document.getElementById("amigo");
let listaDeAmigos = document.getElementById("listaAmigos");
let sorteado = document.getElementById("resultado");

/*Esta funcion valida los campos para que solo sena nombres y que tampoco este vacia */
function validarInput(input) {
    let texto = input.trim();
    const textOnlyRegex = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/;
    if (texto === "") {
        alert("El campo está vacío. Por favor, inserte un nombre.");
        return true;
    }else if (!textOnlyRegex.test(texto)) {  
        alert("Por favor, ingresa solo nombre (sin números ni caracteres especiales).");
        return true;
    }else{
        return false;
    }
}

/*Con esta funcion se limpia la caja de texto */
function limpiarCaja(parametro) {
    parametro.value = "";
}

/*La funcion sirve para agregar a un amigo a la lista */
function agregarAmigo() {

    let nombre = inputAmigo.value;
    if (validarInput(nombre) == true) {
        limpiarCaja(inputAmigo);
        return;
    } else {
        amigos.push(nombre);
        mostrarAmigosLista();
        limpiarCaja(inputAmigo);
    }

}

/* Con esta funcion agregamos cada nombre como un elemento <li> dentro de una lista HTML,
y la mostramos en pantalla. */
function mostrarAmigosLista() {

    let lista = document.querySelector('#listaAmigos')
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

/*La funcion muestra un nombre seleccionado de manera aleatoria y la muestra en pantalla,
luego elimina al nombre sorteado y sigue sorteando a los demas hasta que la lista quede vacia */
function sortearAmigo() {
    if (amigos.length == 0) {
        sorteado.innerText = "No existen nombres agregados a la lista.";
        return;
    } else {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        sorteado.innerText = `El amigo secreto es: ${amigos[aleatorio]}`;
        amigos.splice(aleatorio, 1);
        mostrarAmigosLista();
    }
}

