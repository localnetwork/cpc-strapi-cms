// src/api/global/routes/global.js
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/routes",
      handler: "all-routes.find",
      config: {
        auth: false, // Set to true if authentication is required
        policies: [],
        middlewares: [],
      },
    },
  ],
};
