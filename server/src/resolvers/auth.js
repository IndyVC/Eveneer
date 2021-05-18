module.exports = {
  register: (parent, { username }, { dataSources }, info) => {
    return dataSources.auth.register(username);
  },

  login: (parent, { username, token }, { dataSources }, info) => {
    return dataSources.auth.login(username, token);
  },
};
