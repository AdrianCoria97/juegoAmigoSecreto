# Juego Amigo Secreto

El juego "Amigo Secreto" permite a los usuarios agreagar nombres a una lista, ver la lista actualizada y ser selecionados al azar.

---

## Características

- **Captura de elementos**: En este paso realizamos las captura de elementos que se encuentran en HTML.
- **Validación de entrada**: Verifica que el campo de entrada no esté vacío, que no ocupe caracteres especiales, ni numeros.
- **Limpiar Entrada**: Limpia la entrada de nombres.
- **Agregar amigos**: Adrega un nombre a la lista de amigos.
- **Mostrar amigos en pagina**: Muestra la lista de amigos en la pagina.
- **Sorteo Aleatorio**: muestra un nombre que fue seleccionado de manera azar, y lo elimina. 

---

## FUNCIONAMIENTO

### 1. Captura de elementos

```javascript
let amigos = [];
let inputAmigo = document.getElementById("amigo");
let listaDeAmigos = document.getElementById("listaAmigos");
let sorteado = document.getElementById("resultado");
```

### 2. Validación de entrada

Esta funcion valida los campos para que solo sean nombres y que tampoco este vacia

```javascript
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
```

### 3. Limpiar Entrada

Con esta funcion se limpia la caja de texto, en la entrada de nombres.

```javascript
function limpiarCaja(parametro) {
    parametro.value = "";
}
```

### 4. Agregar Amigos

La funcion sirve para agregar a un amigo a la lista

```javascript
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
```

### 5. Mostrar amigos en pagina

Con esta funcion agregamos cada nombre como un elemento <li> dentro de una lista HTML,
y la mostramos en pantalla.

```javascript
function mostrarAmigosLista() {

    let lista = document.querySelector('#listaAmigos')
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

```

### 6. Sorteo aleatorio de nombres

La funcion muestra un nombre seleccionado de manera aleatoria y la muestra en pantalla,
luego elimina al nombre sorteado y sigue sorteando a los demas hasta que la lista quede vacia.

```javascript
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
```

---

## Cómo Usar

1. **Abrir el Proyecto**:

   - Descarga o clona este repositorio.
   - Abre el archivo `index.html` en tu navegador.

2. **Agregar Amigos**:

   - Escribe un nombre en el campo de entrada "Escribe tu nombre".
   - Haz clic en el botón "Añadir".
   - El nombre aparecerá debajo.

3. **Sortear Amigo**:

   - Haz clic en el botón "Sortear Amigo".
   - Aparecerá el nombre del amigo sorteado en el espacio designado, con letras de color verde.
   - Sigue sorteando hasta que se eliminen todos los nombres de la lista.


---

¡El juego es para vos, diviertete! 🎉