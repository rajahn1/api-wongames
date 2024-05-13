"use strict";

/**
 * game service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::game.game", {
  populate: (params) => {
    console.log("chamando o serviço populatte");
  },
});
