/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  buildOptions: {
    out: "build", // Carpeta de salida (ajusta según tu preferencia)
    formats: ["esm", "cjs", "umd", "iife"], // Formatos de construcción (ajusta según tus necesidades)
  },
};
