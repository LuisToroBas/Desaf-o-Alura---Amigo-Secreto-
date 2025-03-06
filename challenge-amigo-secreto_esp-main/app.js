// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que el nombre no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre a la lista y actualizar la visualización
  amigos.push(nombre);
  actualizarListaAmigos();
  input.value = "";
  input.focus();
}

// Función para actualizar la lista visual de nombres
function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista actual

  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear aleatoriamente un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un amigo para sortear.");
    return;
  }

  // Seleccionar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar el resultado en el elemento con id "resultado"
  const resultado = document.getElementById("resultado");
  resultado.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}
