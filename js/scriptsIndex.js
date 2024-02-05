let btnJug1 = document.getElementById("btnJug1");
let btnJug2 = document.getElementById("btnJug2");

btnJug1.addEventListener("click", jugador1);
btnJug2.addEventListener("click", jugador2);

function jugador1() {
  let tituloModal = document.getElementById("tituloModal");
  let zonaSeleccionModo = document.getElementById("zonaSeleccionModo");
  let zonaSeleccionTema = document.getElementById("zonaSeleccionTema");

  zonaSeleccionModo.style.display = "none";
  zonaSeleccionTema.style.display = "flex";
  tituloModal.textContent = "Selecciona un tema";
}

let valorBtn;
let botonesTema = document.querySelectorAll(".btnTema");

start();

function start() {
  botonesTema.forEach(function (boton) {
    boton.addEventListener("click", function () {
      valorBtn = boton.value;
      const tema = localStorage.setItem("temaSeleccionado", valorBtn);
      location.href = "./pages/j1.html";
    });
  });
}

function recuperarStorage() {
  const guardada = localStorage.getItem("temaSeleccionado");
  let palabraGuardada = seleccionarTema(guardada);

  return palabraGuardada;
}
let zona2J = document.getElementById("zona2J");
let input2J = document.getElementById("input2J");
let btnPalabra2J = document.getElementById("btnPalabra2J");

let valorInput2J;

function jugador2() {
  zonaSeleccionModo.style.display = "none";
  zona2J.style.display = "flex";
  tituloModal.textContent = "Introduce la palabra a buscar";
}

btnPalabra2J.addEventListener("click", recogerPalabra2J);

function recogerPalabra2J() {
  valorInput2J = input2J.value;
  const palabra2J = localStorage.setItem("palabra2Jugadores", valorInput2J);
  localStorage.removeItem("temaSeleccionado");
  location.href = "./pages/j1.html";
}

let homeIndex = document.getElementById("homeIndex");
homeIndex.addEventListener("click", recargarSite);

function recargarSite() {
  location.reload();
}
