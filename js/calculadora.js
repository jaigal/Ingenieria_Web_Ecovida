"use strict";

// calculadora de consumo

import { AGUA_RECOMENDADA, AGUA_PROMEDIO, textoNivel } from "./constantes.js";
import { leerNumero, validarDatos } from "./validaciones.js";
import { calcularResultado } from "./calculos.js";
import { mostrarConsejosPersonalizados } from "./personalizados.js";

// numeros con formato de colombia
const formatearNumero = (numero) => {
  return numero.toLocaleString("es-CO", { maximumFractionDigits: 1 });
};

// arma cada bloque de resultado
const mostrarBloqueResultado = (idBloque, nivel, titulo, detalle) => {
  const bloque = document.getElementById(idBloque);
  bloque.className = "resultado-item nivel-" + nivel;
  bloque.innerHTML = "";

  const parrafoTitulo = document.createElement("p");
  parrafoTitulo.innerHTML = "<strong>" + titulo + "</strong>";

  const parrafoDetalle = document.createElement("p");
  parrafoDetalle.textContent = detalle;

  const parrafoNivel = document.createElement("p");
  parrafoNivel.textContent = textoNivel[nivel];

  bloque.append(parrafoTitulo, parrafoDetalle, parrafoNivel);
  return bloque;
};

// se ejecuta al enviar el formulario
export const calcular = (evento) => {
  evento.preventDefault(); // para que no recargue la pagina

  const personas = leerNumero("personas");
  const aguaMensual = leerNumero("agua-mes");
  const energiaMensual = leerNumero("energia-mes");

  const mensajeErrorCalculadora = document.getElementById("calc-error");
  const bloqueResultado = document.getElementById("resultado");

  const mensajeError = validarDatos(personas, aguaMensual, energiaMensual);
  if (mensajeError) {
    mensajeErrorCalculadora.textContent = mensajeError;
    mensajeErrorCalculadora.hidden = false;
    bloqueResultado.hidden = true;
    return null;
  }
  mensajeErrorCalculadora.hidden = true;

  const resultadoCalculo = calcularResultado(personas, aguaMensual, energiaMensual);

  mostrarBloqueResultado(
    "resultado-agua",
    resultadoCalculo.nivelAgua,
    "Agua: " + formatearNumero(resultadoCalculo.aguaPersonaDia) + " litros por persona al día",
    "Lo recomendado son " + AGUA_RECOMENDADA + " litros y el promedio en Colombia es de " + AGUA_PROMEDIO + " litros."
  );

  mostrarBloqueResultado(
    "resultado-energia",
    resultadoCalculo.nivelEnergia,
    "Energía: " + formatearNumero(resultadoCalculo.energiaPersonaMes) + " kWh por persona al mes",
    "Total del hogar: " + formatearNumero(energiaMensual) + " kWh al mes."
  );

  bloqueResultado.hidden = false;

  // consejos segun el resultado
  mostrarConsejosPersonalizados(resultadoCalculo);

  return resultadoCalculo;
};
