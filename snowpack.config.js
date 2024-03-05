/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  buildOptions: {
    out: "./build/_dist_", // Carpeta de salida (ajusta según tu preferencia)
    formats: ["esm", "cjs", "umd", "iife"],
  },
  exclude: ["**/LICENSE"],
};
