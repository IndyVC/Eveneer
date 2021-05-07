const { DataSource } = require("apollo-datasource");
const axios = require("axios");

class AuthAPI extends DataSource {
  async register(username) {
    const res = await axios.post(`/users/${username}/token`);
    return res.data;
  }

  async login(username, token) {
    const res = await axios.get(`/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { token, ...res.data };
  }
}

module.exports = AuthAPI;
