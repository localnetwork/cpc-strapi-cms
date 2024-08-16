"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/contents/entries/:id",
      handler: "entries.findEntriesByEntity",
      config: {
        auth: false, // Set to true if authentication is required
        policies: [],
        middlewares: [],
      },
    },
  ],
};
