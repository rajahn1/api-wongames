"use strict";

/**
 * game controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", {
  populate: async (ctx) => {
    console.log("Starting to populate");
    // await strapi.service("api::game.game").populate();
    // await strapi.service("api::game.game").findOne(1);
    console.log(ctx.query);
    ctx.send("Finished populating");
  },
});
