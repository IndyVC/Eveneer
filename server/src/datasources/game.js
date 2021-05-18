const { DataSource } = require("apollo-datasource");
const axios = require("axios");

class Game extends DataSource {
  async status() {
    const res = await axios.get("/game/status");
    return res.data;
  }
}

module.exports = Game;
