"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    // Fetch the page by slug
    const entities = await strapi.entityService.findMany("api::page.page", {
      where: { slug },
      populate: "deep", // Populate the blocks dynamically
    });

    if (!entities || entities.length === 0) {
      return ctx.notFound("Page not found");
    }

    // Add componentName to each block
    const entity = entities[0];

    if (entity.Blocks && entity.Blocks.length > 0) {
      entity.Blocks = entity.Blocks.map((block) => {
        const componentName = block.__component.split(".")[1];
        const capitalizedComponentName =
          componentName.charAt(0).toUpperCase() + componentName.slice(1);

        return {
          componentName: capitalizedComponentName, // Capitalize the first letter
          data: { ...block },
        };
      });
    }

    // Add type field
    const response = {
      type: "page",
      ...entity,
    };

    const sanitizedEntity = await this.sanitizeOutput(response, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
