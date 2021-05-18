const { DataSource } = require("apollo-datasource");
const axios = require("axios");

class Leaderboard extends DataSource {
  async leaderboard(token) {
    const res = await axios.get("/game/leaderboard/net-worth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
}

module.exports = Leaderboard;
