"use strict";

/**
 * game controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", {
  populate: async (ctx) => {
    console.log("Starting to populate");

    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query,
    };
    await strapi.service("api::game.game").populate(options);
    ctx.send("Finished populating");
  },
});
