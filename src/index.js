import h from "hyperscript";
import { registerImage } from "./lazy";
import { createImageNodes } from "./utils";

//*1.-      debo crear un imagen
//*2.-      agregar #imagen
//*2.1.-    Imagenes aleatorias
//*3.-      Eventos del Dom --> Agregar imagenes
//*4.-     Usar instersection observer

// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

// Agregar nuevas imagenes
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
  const [node, image] = createImageNodes();
  registerImage(image);
  imageContainer.append(node);
});

// Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});
