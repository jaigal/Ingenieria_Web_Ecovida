"use strict";

// calculos de agua y energia

import {
  AGUA_RECOMENDADA,
  AGUA_PROMEDIO,
  ENERGIA_BAJA,
  ENERGIA_ALTA,
  DIAS_MES
} from "./constantes.js";

// litros por persona al dia
export const calcularAguaPersonaDia = (aguaMensual, personas) => {
  return aguaMensual / personas / DIAS_MES;
};

// kWh por persona al mes
export const calcularEnergiaPersonaMes = (energiaMensual, personas) => {
  return energiaMensual / personas;
};

// nivel de consumo de agua
export const nivelAgua = (litrosPorDia) => {
  if (litrosPorDia <= AGUA_RECOMENDADA) {
    return "bajo";
  }
  if (litrosPorDia <= AGUA_PROMEDIO) {
    return "medio";
  }
  return "alto";
};

// nivel de consumo de energia
export const nivelEnergia = (kwhPorPersona) => {
  if (kwhPorPersona <= ENERGIA_BAJA) {
    return "bajo";
  }
  if (kwhPorPersona <= ENERGIA_ALTA) {
    return "medio";
  }
  return "alto";
};

// junta todos los calculos
export const calcularResultado = (personas, aguaMensual, energiaMensual) => {
  const aguaPersonaDia = calcularAguaPersonaDia(aguaMensual, personas);
  const energiaPersonaMes = calcularEnergiaPersonaMes(energiaMensual, personas);

  return {
    personas: personas,
    aguaPersonaDia: aguaPersonaDia,
    energiaPersonaMes: energiaPersonaMes,
    nivelAgua: nivelAgua(aguaPersonaDia),
    nivelEnergia: nivelEnergia(energiaPersonaMes)
  };
};
