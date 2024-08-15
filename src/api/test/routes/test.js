"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/test/:slug",
      handler: "test.findBySlug",
      config: {
        auth: false, // Set to true if authentication is required
        policies: [],
        middlewares: [],
      },
    },
  ],
};
