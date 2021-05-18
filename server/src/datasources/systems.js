const { DataSource } = require("apollo-datasource");
const axios = require("axios");

class Systems extends DataSource {
  async getAll(token) {
    const res = await axios.get(`/game/systems`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
}

module.exports = Systems;
