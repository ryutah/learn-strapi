'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const {sanitizeEntity} = require('strapi-utils');

module.exports = {
  async findUnpublished(ctx) {
    const result = await strapi.query('categories').find(ctx.query)

    const categories = sanitizeEntity(result, {
      model: strapi.models['categories'],
    });
    ctx.send(categories);
  }
};
