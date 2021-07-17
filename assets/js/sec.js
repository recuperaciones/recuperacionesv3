const clase1 = document.getElementById("clase1");
const clase2 = document.getElementById("clase2");
const videoClase1 = document.getElementById("videoClase1");
const videoClase2 = document.getElementById("videoClase2");
const claseDescription1 = document.getElementById("claseDescription1");
const claseDescription2 = document.getElementById("claseDescription2");

clase1.addEventListener("click", () => {
  clase2.classList.remove("activo");
  clase2.classList.add("inactivo");
  clase1.classList.add("activo");
  clase1.classList.remove("inactivo");
  videoClase1.classList.remove("clase-inactiva");
  videoClase2.classList.add("clase-inactiva");
  claseDescription1.classList.add("clase-activa");
  claseDescription1.classList.remove("clase-inactiva");
  claseDescription2.classList.add("clase-inactiva");
  claseDescription2.classList.remove("clase-activa");
});

clase2.addEventListener("click", () => {
  clase1.classList.remove("activo");
  clase1.classList.add("inactivo");
  clase2.classList.add("activo");
  clase2.classList.remove("inactivo");
  videoClase1.classList.remove("clase-activa");
  videoClase1.classList.add("clase-inactiva");

  videoClase2.classList.remove("clase-inactiva");
  videoClase2.classList.add("clase-activa");
  claseDescription1.classList.add("clase-inactiva");
  claseDescription2.classList.add("clase-activa");
  claseDescription2.classList.remove("clase-inactiva");
});
