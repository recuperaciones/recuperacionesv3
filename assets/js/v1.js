const clase1 = document.getElementById("clase1");
const clase2 = document.getElementById("clase2");
const clase3 = document.getElementById("clase3");
const clase4 = document.getElementById("clase4");
const clase5 = document.getElementById("clase5");
const clase6 = document.getElementById("clase6");
const clase7 = document.getElementById("clase7");

const videoClase1 = document.getElementById("videoClase1");
const videoClase2 = document.getElementById("videoClase2");
const videoClase3 = document.getElementById("videoClase3");
const videoClase4 = document.getElementById("videoClase4");
const videoClase5 = document.getElementById("videoClase5");
const videoClase6 = document.getElementById("videoClase6");
const videoClase7 = document.getElementById("videoClase7");

const claseDescription1 = document.getElementById("claseDescription1");
const claseDescription2 = document.getElementById("claseDescription2");
const claseDescription3 = document.getElementById("claseDescription3");
const claseDescription4 = document.getElementById("claseDescription4");
const claseDescription5 = document.getElementById("claseDescription5");
const claseDescription6 = document.getElementById("claseDescription6");
const claseDescription7 = document.getElementById("claseDescription7");

clase1.addEventListener("click", () => {
  clase1.classList.remove("inactivo");
  clase2.classList.remove("activo");
  clase3.classList.remove("activo");
  clase4.classList.remove("activo");
  clase5.classList.remove("activo");
  clase6.classList.remove("activo");
  clase7.classList.remove("activo");

  clase1.classList.add("activo");
  clase2.classList.add("inactivo");
  clase3.classList.add("inactivo");
  clase4.classList.add("inactivo");
  clase5.classList.add("inactivo");
  clase6.classList.add("inactivo");
  clase7.classList.add("inactivo");

  videoClase1.classList.remove("clase-inactiva");
  videoClase2.classList.remove("clase-activa");
  videoClase3.classList.remove("clase-activa");
  videoClase4.classList.remove("clase-activa");
  videoClase5.classList.remove("clase-activa");
  videoClase6.classList.remove("clase-activa");
  videoClase7.classList.remove("clase-activa");

  videoClase1.classList.add("clase-activa");
  videoClase2.classList.add("clase-inactiva");
  videoClase3.classList.add("clase-inactiva");
  videoClase4.classList.add("clase-inactiva");
  videoClase5.classList.add("clase-inactiva");
  videoClase6.classList.add("clase-inactiva");
  videoClase7.classList.add("clase-inactiva");

  claseDescription1.classList.add("clase-activa");
  claseDescription2.classList.add("clase-inactiva");
  claseDescription3.classList.add("clase-inactiva");
  claseDescription4.classList.add("clase-inactiva");
  claseDescription5.classList.add("clase-inactiva");
  claseDescription6.classList.add("clase-inactiva");
  claseDescription7.classList.add("clase-inactiva");

  claseDescription1.classList.remove("clase-inactiva");
  claseDescription2.classList.remove("clase-activa");
  claseDescription3.classList.remove("clase-activa");
  claseDescription4.classList.remove("clase-activa");
  claseDescription5.classList.remove("clase-activa");
  claseDescription6.classList.remove("clase-activa");
  claseDescription7.classList.remove("clase-activa");
});

clase2.addEventListener("click", () => {
  clase1.classList.remove("activo");
  clase2.classList.remove("inactivo");
  clase3.classList.remove("activo");
  clase4.classList.remove("activo");
  clase5.classList.remove("activo");
  clase6.classList.remove("activo");
  clase7.classList.remove("activo");

  clase1.classList.add("inactivo");
  clase2.classList.add("activo");
  clase3.classList.add("inactivo");
  clase4.classList.add("inactivo");
  clase5.classList.add("inactivo");
  clase6.classList.add("inactivo");
  clase7.classList.add("inactivo");

  videoClase1.classList.remove("clase-activa");
  videoClase2.classList.remove("clase-inactiva");
  videoClase3.classList.remove("clase-activa");
  videoClase4.classList.remove("clase-activa");
  videoClase5.classList.remove("clase-activa");
  videoClase6.classList.remove("clase-activa");
  videoClase7.classList.remove("clase-activa");

  videoClase1.classList.add("clase-inactiva");
  videoClase2.classList.add("clase-activa");
  videoClase3.classList.add("clase-inactiva");
  videoClase4.classList.add("clase-inactiva");
  videoClase5.classList.add("clase-inactiva");
  videoClase7.classList.add("clase-inactiva");

  claseDescription1.classList.add("clase-inactiva");
  claseDescription2.classList.add("clase-activa");
  claseDescription3.classList.add("clase-inactiva");
  claseDescription4.classList.add("clase-inactiva");
  claseDescription5.classList.add("clase-inactiva");
  claseDescription6.classList.add("clase-inactiva");
  claseDescription7.classList.add("clase-inactiva");

  claseDescription1.classList.remove("clase-activa");
  claseDescription2.classList.remove("clase-inactiva");
  claseDescription3.classList.remove("clase-activa");
  claseDescription4.classList.remove("clase-activa");
  claseDescription5.classList.remove("clase-activa");
  claseDescription6.classList.remove("clase-activa");
  claseDescription7.classList.remove("clase-activa");
});

clase3.addEventListener("click", () => {
  clase1.classList.remove("activo");
  clase2.classList.remove("activo");
  clase3.classList.remove("inactivo");
  clase4.classList.remove("activo");
  clase5.classList.remove("activo");
  clase6.classList.remove("activo");
  clase7.classList.remove("activo");

  clase1.classList.add("inactivo");
  clase2.classList.add("inactivo");
  clase3.classList.add("activo");
  clase4.classList.add("inactivo");
  clase5.classList.add("inactivo");
  clase6.classList.add("inactivo");
  clase7.classList.add("inactivo");

  videoClase1.classList.remove("clase-activa");
  videoClase2.classList.remove("clase-activa");
  videoClase3.classList.remove("clase-inactiva");
  videoClase4.classList.remove("clase-activa");
  videoClase5.classList.remove("clase-activa");
  videoClase6.classList.remove("clase-activa");
  videoClase7.classList.remove("clase-activa");

  videoClase1.classList.add("clase-inactiva");
  videoClase2.classList.add("clase-inactiva");
  videoClase3.classList.add("clase-activa");
  videoClase4.classList.add("clase-inactiva");
  videoClase5.classList.add("clase-inactiva");
  videoClase6.classList.add("clase-inactiva");
  videoClase7.classList.add("clase-inactiva");

  claseDescription1.classList.add("clase-inactiva");
  claseDescription2.classList.add("clase-inactiva");
  claseDescription3.classList.add("clase-activa");
  claseDescription4.classList.add("clase-inactiva");
  claseDescription5.classList.add("clase-inactiva");
  claseDescription6.classList.add("clase-inactiva");
  claseDescription7.classList.add("clase-inactiva");

  claseDescription1.classList.remove("clase-activa");
  claseDescription2.classList.remove("clase-activa");
  claseDescription3.classList.remove("clase-inactiva");
  claseDescription4.classList.remove("clase-activa");
  claseDescription5.classList.remove("clase-activa");
  claseDescription6.classList.remove("clase-activa");
  claseDescription7.classList.remove("clase-activa");
});

clase4.addEventListener("click", () => {
  clase1.classList.remove("activo");
  clase2.classList.remove("activo");
  clase3.classList.remove("activo");
  clase4.classList.remove("inactivo");
  clase5.classList.remove("activo");
  clase6.classList.remove("activo");
  clase7.classList.remove("activo");

  clase1.classList.add("inactivo");
  clase2.classList.add("inactivo");
  clase3.classList.add("inactivo");
  clase4.classList.add("activo");
  clase5.classList.add("inactivo");
  clase7.classList.add("inactivo");

  videoClase1.classList.remove("clase-activa");
  videoClase2.classList.remove("clase-activa");
  videoClase3.classList.remove("clase-activa");
  videoClase4.classList.remove("clase-inactiva");
  videoClase5.classList.remove("clase-activa");
  videoClase6.classList.remove("clase-activa");
  videoClase7.classList.remove("clase-activa");

  videoClase1.classList.add("clase-inactiva");
  videoClase2.classList.add("clase-inactiva");
  videoClase3.classList.add("clase-inactiva");
  videoClase4.classList.add("clase-activa");
  videoClase5.classList.add("clase-inactiva");
  videoClase6.classList.add("clase-inactiva");
  videoClase7.classList.add("clase-inactiva");

  claseDescription1.classList.add("clase-inactiva");
  claseDescription2.classList.add("clase-inactiva");
  claseDescription3.classList.add("clase-inactiva");
  claseDescription4.classList.add("clase-activa");
  claseDescription5.classList.add("clase-inactiva");
  claseDescription6.classList.add("clase-inactiva");
  claseDescription7.classList.add("clase-inactiva");

  claseDescription1.classList.remove("clase-activa");
  claseDescription2.classList.remove("clase-activa");
  claseDescription3.classList.remove("clase-activa");
  claseDescription4.classList.remove("clase-inactiva");
  claseDescription5.classList.remove("clase-activa");
  claseDescription6.classList.remove("clase-activa");
  claseDescription7.classList.remove("clase-activa");
});

clase5.addEventListener("click", () => {
  clase1.classList.remove("activo");
  clase2.classList.remove("activo");
  clase3.classList.remove("activo");
  clase4.classList.remove("activo");
  clase5.classList.remove("inactivo");
  clase6.classList.remove("activo");
  clase7.classList.remove("activo");

  clase1.classList.add("inactivo");
  clase2.classList.add("inactivo");
  clase3.classList.add("inactivo");
  clase4.classList.add("inactivo");
  clase5.classList.add("activo");
  clase7.classList.add("inactivo");

  videoClase1.classList.remove("clase-activa");
  videoClase2.classList.remove("clase-activa");
  videoClase3.classList.remove("clase-activa");
  videoClase4.classList.remove("clase-activa");
  videoClase5.classList.remove("clase-inactiva");
  videoClase6.classList.remove("clase-activa");
  videoClase7.classList.remove("clase-activa");

  videoClase1.classList.add("clase-inactiva");
  videoClase2.classList.add("clase-inactiva");
  videoClase3.classList.add("clase-inactiva");
  videoClase4.classList.add("clase-inactiva");
  videoClase5.classList.add("clase-activa");
  videoClase6.classList.add("clase-inactiva");
  videoClase7.classList.add("clase-inactiva");

  claseDescription1.classList.add("clase-inactiva");
  claseDescription2.classList.add("clase-inactiva");
  claseDescription3.classList.add("clase-inactiva");
  claseDescription4.classList.add("clase-inactiva");
  claseDescription5.classList.add("clase-activa");
  claseDescription6.classList.add("clase-inactiva");
  claseDescription7.classList.add("clase-inactiva");

  claseDescription1.classList.remove("clase-activa");
  claseDescription2.classList.remove("clase-activa");
  claseDescription3.classList.remove("clase-activa");
  claseDescription4.classList.remove("clase-activa");
  claseDescription5.classList.remove("clase-inactiva");
  claseDescription6.classList.remove("clase-activa");
  claseDescription7.classList.remove("clase-activa");
});

clase6.addEventListener("click", () => {
  clase1.classList.remove("activo");
  clase2.classList.remove("activo");
  clase3.classList.remove("activo");
  clase4.classList.remove("activo");
  clase5.classList.remove("activo");
  clase6.classList.remove("inactivo");
  clase7.classList.remove("activo");

  clase1.classList.add("inactivo");
  clase2.classList.add("inactivo");
  clase3.classList.add("inactivo");
  clase4.classList.add("inactivo");
  clase5.classList.add("inactivo");
  clase6.classList.add("activo");
  clase7.classList.add("inactivo");

  videoClase1.classList.remove("clase-activa");
  videoClase2.classList.remove("clase-activa");
  videoClase3.classList.remove("clase-activa");
  videoClase4.classList.remove("clase-activa");
  videoClase5.classList.remove("clase-activa");
  videoClase6.classList.remove("clase-inactiva");
  videoClase7.classList.remove("clase-activa");

  videoClase1.classList.add("clase-inactiva");
  videoClase2.classList.add("clase-inactiva");
  videoClase3.classList.add("clase-inactiva");
  videoClase4.classList.add("clase-inactiva");
  videoClase5.classList.add("clase-inactiva");
  videoClase6.classList.add("clase-activa");
  videoClase7.classList.add("clase-inactiva");

  claseDescription1.classList.add("clase-inactiva");
  claseDescription2.classList.add("clase-inactiva");
  claseDescription3.classList.add("clase-inactiva");
  claseDescription4.classList.add("clase-inactiva");
  claseDescription5.classList.add("clase-inactiva");
  claseDescription6.classList.add("clase-activa");
  claseDescription7.classList.add("clase-inactiva");

  claseDescription1.classList.remove("clase-activa");
  claseDescription2.classList.remove("clase-activa");
  claseDescription3.classList.remove("clase-activa");
  claseDescription4.classList.remove("clase-activa");
  claseDescription5.classList.remove("clase-activa");
  claseDescription6.classList.remove("clase-inactiva");
  claseDescription7.classList.remove("clase-activa");
});

clase7.addEventListener("click", () => {
  clase1.classList.remove("activo");
  clase2.classList.remove("activo");
  clase3.classList.remove("activo");
  clase4.classList.remove("activo");
  clase5.classList.remove("activo");
  clase6.classList.remove("activo");
  clase7.classList.remove("inactivo");

  clase1.classList.add("inactivo");
  clase2.classList.add("inactivo");
  clase3.classList.add("inactivo");
  clase4.classList.add("inactivo");
  clase5.classList.add("inactivo");
  clase6.classList.add("inactivo");
  clase7.classList.add("activo");

  videoClase1.classList.remove("clase-activa");
  videoClase2.classList.remove("clase-activa");
  videoClase3.classList.remove("clase-activa");
  videoClase4.classList.remove("clase-activa");
  videoClase5.classList.remove("clase-activa");
  videoClase6.classList.remove("clase-activa");
  videoClase7.classList.remove("clase-inactiva");

  videoClase1.classList.add("clase-inactiva");
  videoClase2.classList.add("clase-inactiva");
  videoClase3.classList.add("clase-inactiva");
  videoClase4.classList.add("clase-inactiva");
  videoClase5.classList.add("clase-inactiva");
  videoClase6.classList.add("clase-inactiva");
  videoClase7.classList.add("clase-activa");

  claseDescription1.classList.add("clase-inactiva");
  claseDescription2.classList.add("clase-inactiva");
  claseDescription3.classList.add("clase-inactiva");
  claseDescription4.classList.add("clase-inactiva");
  claseDescription5.classList.add("clase-inactiva");
  claseDescription6.classList.add("clase-inactiva");
  claseDescription7.classList.add("clase-activa");

  claseDescription1.classList.remove("clase-activa");
  claseDescription2.classList.remove("clase-activa");
  claseDescription3.classList.remove("clase-activa");
  claseDescription4.classList.remove("clase-activa");
  claseDescription5.classList.remove("clase-activa");
  claseDescription6.classList.remove("clase-activa");
  claseDescription7.classList.remove("clase-inactiva");
});
