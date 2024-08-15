"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/pages/:id",
      handler: "api::page.page.findBySlug",
      config: {
        auth: false, // Set to true if authentication is required
        policies: [],
        middlewares: [],
      },
    },
  ],
};
