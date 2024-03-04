/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
//*1.- debo crear un imagen
//*2.- agregar #imagen
// *3.- referencia de lo que habia hecho en HTML:
//<div class="p-4">
//             <img class="mx-auto"
//               width="300"
//               src="https://randomfox.ca/images/18.jpg"
//               alt=""
//             />
//           </div>
const createImageNode = () => {
  const imagen = document.createElement("img");
  imagen.class = "mx-auto";
  imagen.width = "300";
  imagen.src = "https://randomfox.ca/images/22.jpg";

  return imagen;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");
mountNode.appendChild(nuevaImagen);
