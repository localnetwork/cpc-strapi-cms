'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('entries-previewer')
      .service('myService')
      .getWelcomeMessage();
  },
});
