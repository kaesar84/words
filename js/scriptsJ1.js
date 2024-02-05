const dato = localStorage.getItem("temaSeleccionado");
// console.log(dato);

let palabras = seleccionarTema(dato);

function palabraAleatoria(array) {
  let indice = Math.floor(Math.random() * array.length);
  return array[indice];
}

// Selecciona el tema, utiliza la funcion palabra aleatoria para
// retornar valor aleaotrio del array, será la palabra a BUSCAR
function seleccionarTema(tema) {
  // Listas de palabras

  let animalesLista = [
    "Leon",
    "Tigre",
    "Elefante",
    "Jirafa",
    "Cebra",
    "Oso",
    "Mono",
    "Koala",
    "Panda",
    "Lobo",
    "Zorro",
    "Ballena",
    "Delfin",
    "Aguila",
    "Buho",
    "Tortuga",
    "Cocodrilo",
    "Iguana",
    "Rinoceronte",
    "Hipopotamo",
    "Gorila",
    "Camello",
    "Jaguar",
    "Puma",
  ];

  let profesionesLista = [
    "Medico",
    "Ingeniero",
    "Profesor",
    "Policia",
    "Bombero",
    "Cientifico",
    "Arquitecto",
    "Programador",
    "Disenador",
    "Artista",
    "Periodista",
    "Astronauta",
    "Chef",
    "Abogado",
    "Enfermero",
    "Electricista",
    "Carpintero",
    "Paleta",
    "Piloto",
    "Farmaceutico",
    "Fotografo",
    "Psicologo",
    "Contador",
    "Actor",
  ];

  let coloresLista = [
    "Rojo",
    "Azul",
    "Verde",
    "Amarillo",
    "Naranja",
    "Morado",
    "Rosa",
    "Blanco",
    "Negro",
    "Gris",
    "Celeste",
    "Turquesa",
    "Marron",
    "Beige",
    "Ocre",
    "Cian",
    "Lila",
    "Violeta",
    "Salmon",
    "Marfil",
    "Fucsia",
    "Aqua",
    "Malva",
    "Caoba",
  ];

  let deportesLista = [
    "Futbol",
    "Baloncesto",
    "Beisbol",
    "Tenis",
    "Atletismo",
    "Natacion",
    "Ciclismo",
    "Voleibol",
    "Golf",
    "Hockey",
    "Rugby",
    "Boxeo",
    "Esgrima",
    "Karate",
    "Surf",
    "Patinaje",
    "Automovilismo",
    "Ajedrez",
    "Escalada",
    "Pesca",
    "Taekwondo",
    "Triatlon",
    "Equitacion",
    "Vela",
    "Esqui",
  ];

  let dragonBallLista = [
    "Goku",
    "Vegeta",
    "Piccolo",
    "Gohan",
    "Krilin",
    "Bulma",
    "Trunks",
    "Goten",
    "Freezer",
    "Cell",
    "Buu",
    "Beerus",
    "Whis",
    "Tenshinhan",
    "Chaos",
    "Yamcha",
    "Granola",
    "Raditz",
    "Nappa",
    "Pan",
    "Bardock",
    "Broly",
    "Videl",
    "Dende",
    "Satan",
  ];

  let narutoLista = [
    "Naruto",
    "Sasuke",
    "Sakura",
    "Kakashi",
    "Hinata",
    "Shikamaru",
    "Gaara",
    "Orochimaru",
    "Jiraiya",
    "Tsunade",
    "Itachi",
    "Kiba",
    "Neji",
    "RockLee",
    "Ino",
    "Choji",
    "Deidara",
    "Sai",
    "Temari",
    "Kankuro",
    "Madara",
    "Hashirama",
    "Minato",
    "Tobirama",
  ];

  let paisesLista = [
    "Croacia",
    "Canada",
    "China",
    "Japon",
    "Brasil",
    "Rusia",
    "India",
    "Sudafrica",
    "Italia",
    "Alemania",
    "Australia",
    "Francia",
    "Argentina",
    "Mexico",
    "Egipto",
    "Tailandia",
    "Peru",
    "EmiratosArabes",
    "Singapur",
    "CoreaDelSur",
    "España",
    "Portugal",
    "Grecia",
    "Noruega",
    "Suecia",
  ];

  let planetasLista = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Neptuno",
  ];

  let escuelaLista = [
    "Lapiz",
    "Cuaderno",
    "Boligrafo",
    "Regla",
    "Tijeras",
    "Goma",
    "Mochila",
    "Libro",
    "Calculadora",
    "Pegamento",
    "Estuche",
    "Papel",
    "Pizarra",
    "Compas",
    "Pincel",
    "Diccionario",
    "Celo",
    "Libro",
    "Carpeta",
    "Rotuladores",
    "Sacapuntas",
    "Agenda",
    "Mapa",
  ];

  let vehiculosLista = [
    "Coche",
    "Camioneta",
    "Motocicleta",
    "Bicicleta",
    "Camion",
    "Avion",
    "Barco",
    "Helicoptero",
    "Tren",
    "Tractor",
    "Scooter",
    "Submarino",
    "Ambulancia",
    "Furgoneta",
    "Autobus",
    "Trineo",
    "Patines",
    "Triciclo",
    "Cohete",
    "Carroza",
    "Monopatin",
    "Canoa",
    "Carretilla",
    "Jet",
  ];

  let aleatorioLista = animalesLista.concat(
    profesionesLista,
    coloresLista,
    coloresLista,
    deportesLista,
    paisesLista,
    planetasLista,
    escuelaLista,
    dragonBallLista,
    narutoLista
  );

  if (tema == "animales") {
    return palabraAleatoria(animalesLista);
  } else if (tema == "profesiones") {
    return palabraAleatoria(profesionesLista);
  } else if (tema == "colores") {
    return palabraAleatoria(coloresLista);
  } else if (tema == "deportes") {
    return palabraAleatoria(deportesLista);
  } else if (tema == "paises") {
    return palabraAleatoria(paisesLista);
  } else if (tema == "planetas") {
    return palabraAleatoria(planetasLista);
  } else if (tema == "escuela") {
    return palabraAleatoria(escuelaLista);
  } else if (tema == "dragonBall") {
    return palabraAleatoria(dragonBallLista);
  } else if (tema == "naruto") {
    return palabraAleatoria(narutoLista);
  } else if (tema == "aleatorio") {
    return palabraAleatoria(aleatorioLista);
  }
}

let palabraMinus;
let partida2J;

if (palabras == null) {
  palabraMinus = localStorage.getItem("palabra2Jugadores");
  partida2J = true;
  console.log(palabraMinus);
} else {
  palabraMinus = palabras;
  console.log(palabras);
}

let palabra = palabraMinus.toLocaleUpperCase();
let longitudPalabra = palabra.length;

let copiaPalabra = new Array(longitudPalabra);
let copiaPalabraString = copiaPalabra.toString;

let zonaAbc = document.getElementById("zonaAbc");
let contenedorBotones = document.getElementById("botonesAbecedario");

let vidas = 7;
let vidaReiniciar = vidas;
let numVida = document.getElementById("numVida");

// valor de vidas inicial
contadorVidas(vidas);

// reset
let reset = document.getElementById("reset");

// home
let home = document.getElementById("home");
let background = document.getElementById("background");

let btnJug1 = document.getElementById("btnJug1");

let tituloModal = document.getElementById("tituloModal");
let zonaSeleccionModo = document.getElementById("zonaSeleccionModo");
let zonaSeleccionTema = document.getElementById("zonaSeleccionTema");

// Listeners
document.addEventListener("DOMContentLoaded", gameOn());
reset.addEventListener("click", reiniciar);
home.addEventListener("click", modalHome);

// modal Home
function modalHome() {
  location.href = "../index.html";
}

// contador vidas
function contadorVidas(vida) {
  if (vida > 0) {
    if (vida == 9) {
      numVida.textContent = "counter_9";
    } else if (vida == 8) {
      numVida.textContent = "counter_8";
    } else if (vida == 7) {
      numVida.textContent = "counter_7";
    } else if (vida == 6) {
      numVida.textContent = "counter_6";
    } else if (vida == 5) {
      numVida.textContent = "counter_5";
    } else if (vida == 4) {
      numVida.textContent = "counter_4";
    } else if (vida == 3) {
      numVida.textContent = "counter_3";
    } else if (vida == 2) {
      numVida.textContent = "counter_2";
    } else if (vida == 1) {
      numVida.textContent = "counter_1";
    } else if (vida == 0) {
      numVida.textContent = "counter_0";
    }
  } else {
    if (!partida2J) {
      reset.textContent = "restart_alt";
    }
  }
}

// Función para un jugador, mantiene el tema seleccionado
// y proporciona una nueva palabra aleatoria
function reiniciar() {
  vidas = vidaReiniciar;
  contadorVidas(vidas);
  contenedorBotones.innerHTML = "";

  randomP = seleccionarTema(dato);
  // console.log(randomP);

  palabraMinus = randomP;
  palabra = palabraMinus.toLocaleUpperCase();
  longitudPalabra = palabra.length;

  copiaPalabra = new Array(longitudPalabra);
  copiaPalabraString = copiaPalabra.toString;
  reset.textContent = "";

  buscada();
  gameOn();
}

// botones abecedario
function gameOn() {
  rellenaArray(0, "*");
  buscada();
  // Obtener el contenedor donde se agregarán los botones
  // var contenedorBotones = document.getElementById("botonesAbecedario");
  // Crear un array con las letras del abecedario
  var letrasAbecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

  // Iterar sobre el array y crear un botón para cada letra
  letrasAbecedario.forEach(function (letra) {
    var btnLetra = document.createElement("button");
    btnLetra.classList.add("btnLetra");
    btnLetra.textContent = letra;

    btnLetra.addEventListener("click", function () {
      validarLetraIntroducida(letra);
      btnLetra.classList.add("btnLetraHide");
      btnLetra.classList.remove("btnLetra");
    });
    contenedorBotones.appendChild(btnLetra);
  });
}

// genera la palabra a buscar
function buscada() {
  let contenedorPalabraBuscada = document.getElementById(
    "contenedorPalabraBuscada"
  );
  contenedorPalabraBuscada.innerHTML = "";

  copiaPalabra.forEach(function (valor) {
    let btnBuscada = document.createElement("p");
    btnBuscada.classList.add("btnBuscada");

    btnBuscada.textContent = valor;

    contenedorPalabraBuscada.appendChild(btnBuscada);
  });
  //
}

// Cambio de estilo si la palabra es correcta
function cambioAcierto() {
  let palabraOk = document.querySelectorAll(".btnBuscada");

  palabraOk.forEach(function (element) {
    element.classList.add("palabraEncontrada");
    element.classList.remove("btnBuscada");
  });
}

// Cambio de estilo si la palabra es incorrecta
function cambioError() {
  let palabraOk = document.querySelectorAll(".btnBuscada");

  // zona palabra
  palabraOk.forEach(function (element) {
    element.classList.add("palabraError");
    element.classList.remove("btnBuscada");
  });
  // zona abecedario
  let btnLetra = document.querySelectorAll(".btnLetra");
  btnLetra.forEach(function (element) {
    element.classList.add("btnLetraHide");
    element.classList.remove("btnLetra");
  });
}

// valida la existencia de la letra
function validarLetraIntroducida(letra) {
  let intro = letra;
  let check = false;

  for (let i = 0; i < palabra.length; i++) {
    const element = palabra[i];

    if (element == intro) {
      rellenaArray(i, element);
      check = true;
      buscada();
    }
    if (palabra == copiaPalabra.join("")) {
      // console.log("has Acertado");
      cambioAcierto();
      let btnLetra = document.querySelectorAll(".btnLetra");
      btnLetra.forEach(function (element) {
        element.classList.add("btnLetraHide");
        element.classList.remove("btnLetra");
      });
      if (!partida2J) {
        reset.textContent = "restart_alt";
        break;
      } else {
        break;
      }
    }
  }

  if (!check) vidas--;
  // console.log(vidas);
  contadorVidas(vidas);

  if (vidas < 1) {
    cambioError();
    numVida.textContent = "counter_0";
    // alert("loser");
  }
}

// Rellena el array con el caracter correspondiente
function rellenaArray(index, element) {
  copiaPalabra[index] = element;

  for (let i = 0; i < copiaPalabra.length; i++) {
    if (copiaPalabra[i] == null) {
      copiaPalabra[i] = "*";
    }
  }
}
