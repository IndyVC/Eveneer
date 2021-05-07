const axios = require("axios");

module.exports = {
  register: (parent, { username }, { dataSources }, info) => {
    return dataSources.authAPI.register(username);
  },

  login: (parent, { username, token }, { dataSources }, info) => {
    return dataSources.authAPI.login(username, token);
  },
};
