"use strict";

// validaciones del formulario

// lee el numero de una casilla (NaN si esta vacia)
export const leerNumero = (idCampo) => {
  const valorEscrito = document.getElementById(idCampo).value.trim();
  const numeroLeido = valorEscrito === "" ? NaN : Number(valorEscrito);
  return numeroLeido;
};

// quita los errores de todas las casillas
const limpiarErroresDeCampos = () => {
  const campos = document.querySelectorAll(".formulario input");
  campos.forEach((campo) => {
    campo.classList.remove("input-error");
  });
  return campos.length;
};

// marca la casilla que tiene el error
const marcarCampoConError = (idCampo) => {
  const campo = document.getElementById(idCampo);
  campo.classList.add("input-error");
  return campo;
};

// revisa los datos, devuelve el error o "" si todo esta bien
export const validarDatos = (personas, aguaMensual, energiaMensual) => {
  limpiarErroresDeCampos();

  if (!Number.isInteger(personas) || personas < 1) {
    marcarCampoConError("personas");
    return "Escribe cuántas personas viven en el hogar (un número entero desde 1).";
  }
  if (isNaN(aguaMensual) || aguaMensual < 0) {
    marcarCampoConError("agua-mes");
    return "Escribe el consumo de agua del mes en litros (0 o más). Lo encuentras en tu recibo.";
  }
  if (isNaN(energiaMensual) || energiaMensual < 0) {
    marcarCampoConError("energia-mes");
    return "Escribe el consumo de energía del mes en kWh (0 o más). Lo encuentras en tu recibo.";
  }
  return "";
};
