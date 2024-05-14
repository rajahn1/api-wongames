// @ts-nocheck
"use strict";

/**
 * game service
 */

const axios = require("axios");
const slugify = require("slugify");
async function getGameInfo(slug) {
  const { JSDOM } = require("jsdom");

  const body = await axios.get(`https://www.gog.com/game/${slug}`);
  const dom = new JSDOM(body.data);
  const description = dom.window.document.querySelector(".description");

  return {
    rating: "BR0",
    short_description: description.textContent.slice(0, 160),
    description: description.innerHTML,
  };
}
const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::game.game", {
  populate: async (params) => {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`;

    const {
      data: { products },
    } = await axios.get(gogApiUrl);

    console.log(products[0].publisher);

    await strapi.service("api::publisher.publisher").create({
      data: {
        name: products[0].publisher,

        slug: slugify(products[0].publisher).toLowerCase(),
      },
    });
  },
});
