"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const https = require("https");

    const baseUrl = "https://graph.instagram.com/me/media";
    const fields = "id,caption,media_url";
    const limit = 100;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const url = `${baseUrl}?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    https.get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        const products = JSON.parse(data).data.map((item) => ({
          id: item.id,
          title: extractTitle(item),
          collection: extractCollection(item),
          price: 39.99,
          image: item.media_url,
        }));

        queryInterface.bulkInsert("Products", products, {});
      });
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};

const collections = {
  apex: "Apex Legends",
  arcane: "Arcane",
  brawlstars: "Brawl Stars",
  coraline: "Coraline",
  demonslayer: "Demon Slayer",
  disney: "Disney",
  disneypixar: "Disney Pixar",
  doremi: "Doremi",
  ghibli: "Ghibli",
  lesnocesfunebres: "Les Noces Funèbres",
  mariokart: "Mario Kart",
  miraculous: "Miraculous",
  monsterhigh: "Monster High",
  pixar: "Pixar",
  solaropposites: "Solar Opposites",
  totoro: "Totoro",
  winx: "Winx Club",
  zeldatotk: "Zelda",
};

function extractTitle(item) {
  return item.caption.split("\n")[0];
}

function extractCollection(item) {
  const key = item.caption.split("#")[2].trim();
  return collections[key] ?? key;
}
