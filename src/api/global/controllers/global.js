"use strict";

module.exports = {
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    console.log("slug", slug);
    try {
      // Fetch all content types from Strapi
      const contentTypes = await strapi.contentTypes;

      // Get the names of the content types
      const contentTypeNames = Object.keys(contentTypes)
        .filter((key) => key.startsWith("api::"))
        .map(
          (key) => key.split("::")[1].split(".")[1] // Extract the content type name
        );

      // Iterate over all content types to find the one matching the slug
      for (const contentType of contentTypeNames) {
        try {
          // Fetch data for the current content type based on the slug
          const entities = await strapi.entityService.findMany(
            `api::${contentType}.${contentType}`,
            {
              filters: { slug },
              populate: "deep", // Adjust as needed
            }
          );

          if (entities.length > 0) {
            const entity = {
              type: contentType,
              route_url: `/${entities[0].slug || entities[0].id}`,
              attributes: {
                route_url: `/${entities[0].slug || entities[0].id}`,
                ...entities[0],
              }, // Return the first matching entity
            };
            if (
              entity.attributes.Blocks &&
              entity.attributes.Blocks.length > 0
            ) {
              entity.attributes.Blocks = entity.attributes.Blocks.map(
                (block) => {
                  const componentName = block.__component.split(".")[1];
                  const capitalizedComponentName = componentName
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join("");

                  return {
                    componentName: capitalizedComponentName, // Capitalize the first letter
                    data: { ...block },
                  };
                }
              );
            }

            // Add type field
            const result = {
              type: "page",
              ...entity,
            };

            return ctx.send(result);
          }
        } catch (err) {
          // Handle errors if necessary
          console.error(
            `Error fetching data for content type ${contentType}:`,
            err
          );
        }
      }

      // Return a not found response if no content type matches
      return ctx.notFound("Content not found for this slug");
    } catch (err) {
      console.error("Error fetching content types:", err);
      return ctx.internalServerError(
        "An error occurred while fetching content types"
      );
    }
  },
};
