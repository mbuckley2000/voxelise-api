'use strict';

/**
 * Mesh.js controller
 *
 * @description: A set of functions called "actions" for managing `Mesh`.
 */

module.exports = {

  /**
   * Retrieve mesh records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mesh.search(ctx.query);
    } else {
      return strapi.services.mesh.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mesh record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.mesh.fetch(ctx.params);
  },

  /**
   * Count mesh records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mesh.count(ctx.query);
  },

  /**
   * Create a/an mesh record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mesh.add(ctx.request.body);
  },

  /**
   * Update a/an mesh record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mesh.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mesh record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mesh.remove(ctx.params);
  }
};
