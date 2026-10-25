// Listas de imágenes
const listaA = [
  "./assets/A1.jpg",
  "./assets/A2.jpg",
  "./assets/A3.jpg",
];
const listaS = [
 "./assets/S1.jpg",
  "./assets/S2.jpg",
  "./assets/S3.jpg",
];
const listaC = [
  "./assets/C1.jpg",
  "./assets/C2.jpg",
  "./assets/C3.jpg",
];

// Contenedores de las imágenes del HTML usando los Ids
const A = document.getElementById("A");
const S = document.getElementById("S");
const C = document.getElementById("C");
const boton = document.getElementById("boton");

// Variables de los números aleatorios
let AAleatorio = 0;
let SAleatorio = 0;
let CAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva combi con tres imágenes elegidas aleatoriamente
function generarBestia() {
  AAleatorio = numeroAleatorio(0, listaA.length);
  SAleatorio = numeroAleatorio(0, listaS.length);
  CAleatorio = numeroAleatorio(0, listaC.length);

  // Asignamos la nueva fuente (source) a cada imagen
  A.src = `${listaA[AAleatorio]}`; //ruta + listaA[AAleatorio];
  S.src = `${listaS[SAleatorio]}`;
  C.src = `${listaC[CAleatorio]}`;

  console.log(AAleatorio, SAleatorio, CAleatorio);
}

// Colección de audios
const cancion1 = new Audio("./audio/adela.mp3");
const cancion2 = new Audio("./audio/charli.mp3");
const cancion3 = new Audio("./audio/slayyyter.mp3");

const videoFondo = document.getElementById("videoFondo");

// Lista videos 
const videos = [
    "./videos/charli.mp4",
    "./videos/adela.mp4",
    "./videos/slayyyter.mp4"
];

// Función para cambiar el video de fondo 

function cambiarVideo(ruta) {
    videoFondo.src = ruta;
    videoFondo.load();
    videoFondo.play().catch(error => {
        console.log("No se pudo reproducir el video:", error);
    });
}

// Evento click del boton para generar una combi y reproducir la canción correspondiente
boton.addEventListener("click", function () {
    generarBestia();

    // Pausar todas las canciones y reinciar su tiempo
    [cancion1, cancion2, cancion3].forEach(cancion => {
        cancion.pause();
        cancion.currentTime = 0;
    });

    // Elegir un video aleatorio para la nueva combinación
    const videoAleatorio = videos[
        Math.floor(Math.random() * videos.length)
    ];

    // Cambiar el video fondo al video aleatorio
    cambiarVideo(videoAleatorio);

    const a = String(listaA[AAleatorio]).toLowerCase();
    const c = String(listaC[CAleatorio]).toLowerCase();
    const s = String(listaS[SAleatorio]).toLowerCase();

    // Combinación de Adela
    if (a.includes("a1") && c.includes("c1") && s.includes("s1")) {
        cambiarVideo("./videos/adela.mp4");
        cancion1.play();
    }

    // Combinación de Charli
    else if (a.includes("a2") && c.includes("c2") && s.includes("s2")) {
        cambiarVideo("./videos/charli.mp4");
        cancion2.play();
    }

    // Combinación de Slayyyter
    else if (a.includes("a3") && c.includes("c3") && s.includes("s3")) {
        cambiarVideo("./videos/slayyyter.mp4");
        cancion3.play();
    }
});
generarBestia();
