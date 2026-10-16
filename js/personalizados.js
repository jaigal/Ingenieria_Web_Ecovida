"use strict";

// consejos segun el resultado de la calculadora

import { textoNivel } from "./constantes.js";

const consejosPorNivel = {
  agua: {
    alto: [
      "Toma duchas de máximo 5 minutos: es donde más agua se gasta en casa.",
      "Revisa todas las llaves y el sanitario: una llave goteando puede desperdiciar más de 30 litros al día.",
      "Cierra la llave mientras te cepillas, te enjabonas o lavas los platos.",
      "Usa la lavadora solo con carga completa.",
      "Recoge el agua lluvia para regar las plantas y limpiar los pisos."
    ],
    medio: [
      "Estás cerca de los 100 litros recomendados: acorta un poco las duchas.",
      "Revisa que no haya fugas en las llaves ni en el sanitario.",
      "Reutiliza el agua lluvia para el jardín."
    ],
    bajo: [
      "¡Muy bien! Tu consumo de agua está dentro de lo recomendado. Sigue así.",
      "Comparte tus hábitos de ahorro con tu familia y vecinos."
    ]
  },
  energia: {
    alto: [
      "Cambia todos los bombillos tradicionales por LED: ahorran hasta un 80 % en iluminación.",
      "Desconecta los equipos que quedan en modo de espera (TV, cargadores, microondas).",
      "Apaga las luces al salir de una habitación.",
      "Revisa la nevera: no la abras seguido y no metas alimentos calientes.",
      "Aprovecha la luz natural durante el día."
    ],
    medio: [
      "Desconecta los aparatos que no estás usando.",
      "Revisa si todavía tienes bombillos tradicionales y cámbialos por LED.",
      "Aprovecha la luz natural durante el día."
    ],
    bajo: [
      "¡Excelente! Tu consumo de energía es responsable. Sigue así.",
      "Mantén el hábito de apagar luces y desconectar equipos."
    ]
  }
};

// 0 es el mas urgente
const prioridadPorNivel = { alto: 0, medio: 1, bajo: 2 };

// arma la lista: primero lo que mas se gasta
export const obtenerConsejosPersonalizados = (resultadoCalculo) => {
  const consejosAgua = consejosPorNivel.agua[resultadoCalculo.nivelAgua];
  const consejosEnergia = consejosPorNivel.energia[resultadoCalculo.nivelEnergia];

  const energiaEsPrioridad =
    prioridadPorNivel[resultadoCalculo.nivelEnergia] < prioridadPorNivel[resultadoCalculo.nivelAgua];
  const grupos = energiaEsPrioridad
    ? [consejosEnergia, consejosAgua]
    : [consejosAgua, consejosEnergia];

  return grupos.flat();
};

// muestra los consejos en la pagina
export const mostrarConsejosPersonalizados = (resultadoCalculo) => {
  const textoIntroduccion = document.getElementById("personalizados-texto");
  const listaConsejos = document.getElementById("personalizados-lista");

  textoIntroduccion.textContent =
    "Según tu resultado (agua: " + textoNivel[resultadoCalculo.nivelAgua].toLowerCase() +
    "; energía: " + textoNivel[resultadoCalculo.nivelEnergia].toLowerCase() +
    "), te recomendamos:";

  const consejosPersonalizados = obtenerConsejosPersonalizados(resultadoCalculo);

  listaConsejos.innerHTML = "";
  consejosPersonalizados.forEach((consejo) => {
    const itemLista = document.createElement("li");
    itemLista.textContent = consejo;
    listaConsejos.appendChild(itemLista);
  });

  return consejosPersonalizados;
};
