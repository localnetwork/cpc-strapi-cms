// src/api/global/routes/global.js
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/route/:slug*",
      handler: "global.findBySlug",
      config: {
        auth: false, // Set to true if authentication is required
        policies: [],
        middlewares: [],
      },
    },
  ],
};
