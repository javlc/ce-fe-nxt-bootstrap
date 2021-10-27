// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? "/ce-fe-nxt-bootstrap" : "",
  assetPrefix: !debug ? "/ce-fe-nxt-bootstrap/" : "",
  // trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/dashboard": { page: "/dashboard" },
    };
  },
};
