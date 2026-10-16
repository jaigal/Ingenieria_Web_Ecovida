"use strict";

// navegacion: scroll suave y menu activo

// enlaces del menu que llevan a una seccion (#)
const obtenerEnlacesMenu = () => {
  const todosLosEnlaces = document.querySelectorAll(".menu a");
  const enlacesDeSeccion = Array.from(todosLosEnlaces).filter((enlace) => {
    return enlace.getAttribute("href").startsWith("#");
  });
  return enlacesDeSeccion;
};

const enlacesMenu = obtenerEnlacesMenu();

// scroll suave en los enlaces internos
export const activarScrollSuave = () => {
  const enlacesInternos = document.querySelectorAll('a[href^="#"]');

  enlacesInternos.forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
      const destino = enlace.getAttribute("href");

      // los enlaces que son solo # no hacen nada
      if (destino === "#") {
        evento.preventDefault();
        return;
      }

      const seccionDestino = document.querySelector(destino);
      if (!seccionDestino) {
        return;
      }

      evento.preventDefault();
      seccionDestino.scrollIntoView({ behavior: "smooth", block: "start" });
      // cambia la url sin recargar
      history.pushState(null, "", destino);
    });
  });

  return enlacesInternos.length;
};

// marca en el menu la seccion que se esta viendo
export const actualizarMenuActivo = () => {
  if (enlacesMenu.length === 0) {
    return "";
  }

  let idSeccionActual = "inicio";
  const limiteVisible = window.scrollY + window.innerHeight * 0.35;

  enlacesMenu.forEach((enlace) => {
    const seccion = document.querySelector(enlace.getAttribute("href"));
    if (seccion && seccion.getBoundingClientRect().top + window.scrollY <= limiteVisible) {
      idSeccionActual = seccion.id;
    }
  });

  // si llega al final marca contacto
  const llegoAlFinal = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
  if (llegoAlFinal) {
    idSeccionActual = enlacesMenu[enlacesMenu.length - 1].getAttribute("href").slice(1);
  }

  enlacesMenu.forEach((enlace) => {
    enlace.classList.toggle("activo", enlace.getAttribute("href") === "#" + idSeccionActual);
  });

  return idSeccionActual;
};
