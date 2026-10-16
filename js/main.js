"use strict";

import { mostrarConsejo } from "./consejos.js";
import { mostrarAnio } from "./fecha.js";
import { activarScrollSuave, actualizarMenuActivo } from "./navegacion.js";
import { calcular } from "./calculadora.js";

// boton del consejo del dia (solo esta en el inicio)
const conectarConsejoDelDia = () => {
  const botonConsejo = document.getElementById("btn-consejo");
  if (botonConsejo) {
    botonConsejo.addEventListener("click", mostrarConsejo);
  }
  return botonConsejo !== null;
};

// formulario de la calculadora
const conectarCalculadora = () => {
  const formularioCalculadora = document.getElementById("form-calculadora");
  if (formularioCalculadora) {
    formularioCalculadora.addEventListener("submit", calcular);
  }
  return formularioCalculadora !== null;
};

// lo que se ejecuta al cargar la pagina
const iniciarPagina = () => {
  conectarConsejoDelDia();
  conectarCalculadora();
  mostrarAnio();
  activarScrollSuave();
  actualizarMenuActivo();
  window.addEventListener("scroll", actualizarMenuActivo, { passive: true });
  window.addEventListener("resize", actualizarMenuActivo);
  return true;
};

iniciarPagina();
