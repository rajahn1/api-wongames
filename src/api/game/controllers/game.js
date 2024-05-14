"use strict";

/**
 * game controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", {
  populate: async (ctx) => {
    console.log("Starting to populate");
    await strapi.service("api::game.game").populate();
    ctx.send("Finished populating");
  },
});
