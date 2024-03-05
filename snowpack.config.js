/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "./build",
    src: "./build/_dist_",
  },
  buildOptions: {
    out: "./build", // Carpeta de salida (ajusta según tu preferencia)
    formats: ["esm", "cjs", "umd", "iife"],
  },
  exclude: ["**/LICENSE"],
};
