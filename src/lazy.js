const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target; // imagen o div? es el container

  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  imagen.src = url;
  //imagen.src = `https://randomfox.ca/images/${random()}.jpg`; //console.log(container.nodeName);

  //hay que hacer que se desregistre la imgen luego

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
  //IntersectionObserver(imagen);
};
