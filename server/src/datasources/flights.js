const { DataSource } = require("apollo-datasource");
const axios = require("axios");

class Flights extends DataSource {
  async getAll(token, system) {
    const res = await axios.get(`/game/systems/${system}/flight-plans`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }

  async get(token, username, flightId) {
    const res = await axios.get(`/users/${username}/flight-plans/${flightId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
}

module.exports = Flights;
