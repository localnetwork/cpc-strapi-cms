"use strict";

module.exports = {
  async find(ctx) {
    try {
      const contentTypes = await strapi.contentTypes;

      // Extract content type names
      const contentTypeNames = Object.keys(contentTypes)
        .filter((key) => key.startsWith("api::"))
        .map((key) => key.split("::")[1].split(".")[1]);

      const data = [];

      // Get pagination parameters from the query string, with default values
      const { page = 1, limit = 100 } = ctx.query;
      const start = (page - 1) * limit;

      for (const contentType of contentTypeNames) {
        const entities = await strapi.entityService.findMany(
          `api::${contentType}.${contentType}`,
          {
            start,
            limit,
          }
        );

        if (entities && entities.length) {
          entities.forEach((entry) => {
            data.push({
              id: entry?.slug || entry.id,
              type: contentType,
              attributes: {
                name: entry.name || entry.title,
                route_url: entry.route_url || `/${entry.slug || entry.id}`,
                visibility: entry.visibility || "public",
                published_at: entry.publishedAt,
                locale: entry.locale || "en",
              },
            });
          });
        }
      }

      const totalItems = data.length;
      const totalPages = Math.ceil(totalItems / limit);

      // Get the domain dynamically from the request header
      const domainUrl = `${ctx.request.protocol}://${ctx.request.header.host}`;

      ctx.body = {
        data,
        meta: {
          total: totalItems,
          current_page: parseInt(page),
          per_page: parseInt(limit),
          last_page: totalPages,
        },
        links: {
          first: `${domainUrl}/api/routes?page=1`,
          last: `${domainUrl}/api/routes?page=${totalPages}`,
          prev: page > 1 ? `${domainUrl}/api/routes?page=${page - 1}` : null,
          next:
            page < totalPages
              ? `${domainUrl}/api/routes?page=${parseInt(page) + 1}`
              : null,
        },
        jsonapi: {
          version: "1.0",
        },
      };
    } catch (error) {
      ctx.throw(500, `Internal Server Error: ${error.message}`);
    }
  },
};
