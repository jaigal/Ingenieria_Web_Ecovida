// =========================================
// ECOVIDA - FUNCIONES BÁSICAS DE JAVASCRIPT
// (este mismo archivo se carga en todas las páginas)
// =========================================

// Lista (arreglo) con los consejos que se van a mostrar
const consejos = [
  "Cierra la llave mientras te cepillas los dientes.",
  "Revisa las llaves que gotean y repáralas pronto.",
  "Usa el agua lluvia para regar las plantas.",
  "Cambia tus bombillos tradicionales por bombillos LED.",
  "Desconecta los equipos que quedan en modo de espera.",
  "Aprovecha la luz natural durante el día."
];

// Función 1: escoge un consejo al azar y lo muestra en el párrafo
function mostrarConsejo() {
  const indice = Math.floor(Math.random() * consejos.length);
  const parrafo = document.getElementById("consejo-texto");
  parrafo.textContent = consejos[indice];
}

// Función 2: pone el año actual en el pie de página
function mostrarAnio() {
  const span = document.getElementById("anio");
  if (span) {
    span.textContent = new Date().getFullYear();
  }
}

// Conectar el botón con la función.
// El botón solo existe en index.html: el "if" evita un error en las otras páginas.
const boton = document.getElementById("btn-consejo");
if (boton) {
  boton.addEventListener("click", mostrarConsejo);
}

// Se ejecuta apenas carga la página
mostrarAnio();
