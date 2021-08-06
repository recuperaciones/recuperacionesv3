const descriptcion1 = document.getElementById("descripcion1");
const descriptcion2 = document.getElementById("descripcion2");

const clases = document.getElementsByClassName("clases")[0];

clases.addEventListener("click", (e) => {
  console.log(e.target.id);
});

function saludo() {
  descriptcion1.classList.add("activa");
  descriptcion2.classList.remove("activa");
}
function saludo2() {
  descriptcion1.classList.remove("activa");
  descriptcion2.classList.add("activa");
}
