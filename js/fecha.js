"use strict";

// año del footer

export const obtenerAnioActual = () => {
  return new Date().getFullYear();
};

// pone el año en el footer
export const mostrarAnio = () => {
  const spanAnio = document.getElementById("anio");
  const anioActual = obtenerAnioActual();
  if (spanAnio) {
    spanAnio.textContent = anioActual;
  }
  return anioActual;
};
