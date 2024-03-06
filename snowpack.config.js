/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    build: "./build/_dist_",
  },
  buildOptions: {
    baseUrl: "https://workshop-2-lazy.vercel.app/",
  },
};
