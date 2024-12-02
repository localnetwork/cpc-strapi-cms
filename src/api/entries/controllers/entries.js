"use strict";

module.exports = {
  async findEntriesByEntity(ctx) {
    const { id } = ctx.params;

    // Get pagination, sorting, and filtering parameters from the query string
    const {
      page = 1,
      limit = 100,
      sort = "createdAt:desc",
      filters = "{}",
    } = ctx.query;
    const start = (page - 1) * limit;

    // Extract the sorting field and order from the query
    const [sortField, sortOrder] = sort.split(":");

    // Parse filters from JSON string into an object
    let filterObject;
    try {
      filterObject = JSON.parse(filters);
    } catch (error) {
      return ctx.badRequest(
        "Invalid filter format. Filters should be a valid JSON object."
      );
    }
    console.log("sortOrder", sortOrder);
    // Fetch entities with pagination, dynamic sorting, filtering, and deep population
    const entities = await strapi.entityService.findMany(`api::${id}.${id}`, {
      start,
      limit,
      sort: { [sortField]: sortOrder || "desc" }, // Apply the dynamic sort field and order
      filters: filterObject, // Apply dynamic filters
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
        first: `${domainUrl}/api/contents/entries/${id}?page=1&sort=${sort}`,
        last: `${domainUrl}/api/contents/entries/${id}?page=${totalPages}&sort=${sort}`,
        prev:
          page > 1
            ? `${domainUrl}/api/contents/entries/${id}?page=${
                page - 1
              }&sort=${sort}`
            : null,
        next:
          page < totalPages
            ? `${domainUrl}/api/contents/entries/${id}?page=${
                parseInt(page) + 1
              }&sort=${sort}`
            : null,
      },
      jsonapi: {
        version: "1.0",
      },
    };
  },
};
