"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/projects/:id",
      handler: "api::project.project.findBySlug",
      config: {
        auth: false, // Set to true if authentication is required
        policies: [],
        middlewares: [],
      },
    },
  ],
};
