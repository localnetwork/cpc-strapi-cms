"use strict";

module.exports = {
  async findEntriesByEntity(ctx) {
    const { id } = ctx.params;

    // Get pagination parameters from the query string, with default values
    const { page = 1, limit = 100 } = ctx.query;
    const start = (page - 1) * limit;

    // const entities = await strapi.entityService.findMany(`api::${id}.${id}`, {
    //   start,
    //   limit,
    //   populate: "deep",
    // });

    const entities = await strapi.entityService.findMany(`api::${id}.${id}`, {
      start,
      limit,
      populate: "deep",
    });

    const data = [];

    entities.forEach((entry) => {
      data.push({
        id: entry.slug || entry.id,
        type: id,
        attributes: {
          name: entry.name || entry.title,
          route_url: entry.route_url || `/${entry.slug || entry.id}`,
          visibility: entry.visibility || "public",
          published_at: entry.publishedAt,
          locale: entry.locale || "en",
          ...entry,
        },
      });
    });

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
        first: `${domainUrl}/api/contents/entries/${id}?page=1`,
        last: `${domainUrl}/api/contents/entries/${id}?page=${totalPages}`,
        prev:
          page > 1
            ? `${domainUrl}/api/contents/entries/${id}?page=${page - 1}`
            : null,
        next:
          page < totalPages
            ? `${domainUrl}/api/contents/entries/${id}?page=${
                parseInt(page) + 1
              }`
            : null,
      },
      jsonapi: {
        version: "1.0",
      },
    };
  },
};
