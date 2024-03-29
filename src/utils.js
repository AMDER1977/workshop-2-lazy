import h from "hyperscript";

const minimum = 1;
const maximum = 122;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

export const createImageNodes = () => {
  //   const wrapper = document.createElement("div");
  //   wrapper.className = "p-4";
  const wrapper = h("div.p-4"); //* hyperscript resume las dos lineas anteriores

  //   const image = document.createElement("img");
  //   image.className = "mx-auto rounded-md bg-gray-300";
  //   image.src =
  //     "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  //   image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  //   image.width = 320;
  const image = h("img.mx-auto.rounded-md.bg-gray-300.w-320.h-300", {
    //* hyperscript resume las  lineas anteriores
    width: "320",
    "data-src": `https://randomfox.ca/images/${random()}.jpg`,
    alt: "Random-Fox",
  });

  wrapper.append(image);

  return [wrapper, image];
};
