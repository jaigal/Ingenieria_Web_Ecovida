"use strict";

// consejo del dia

export const consejos = [
  "Cierra la llave mientras te cepillas los dientes.",
  "Revisa las llaves que gotean y repáralas pronto.",
  "Usa el agua lluvia para regar las plantas.",
  "Cambia tus bombillos tradicionales por bombillos LED.",
  "Desconecta los equipos que quedan en modo de espera.",
  "Aprovecha la luz natural durante el día."
];

// posicion al azar
const obtenerIndiceAleatorio = (cantidad) => {
  const indiceAleatorio = Math.floor(Math.random() * cantidad);
  return indiceAleatorio;
};

// saca un consejo al azar de la lista
export const obtenerConsejoAleatorio = (listaConsejos) => {
  const indiceAleatorio = obtenerIndiceAleatorio(listaConsejos.length);
  return listaConsejos[indiceAleatorio];
};

// muestra el consejo en la pagina
export const mostrarConsejo = () => {
  const parrafoConsejo = document.getElementById("consejo-texto");
  const consejoElegido = obtenerConsejoAleatorio(consejos);
  parrafoConsejo.textContent = consejoElegido;
  return consejoElegido;
};
