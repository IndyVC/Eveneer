module.exports = {
  status: async (parent, args, { dataSources }, info) => {
    const res = await dataSources.game.status();
    return res.status;
  },
};
