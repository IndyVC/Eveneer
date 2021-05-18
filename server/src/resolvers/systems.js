module.exports = {
  systems: async (parent, { token }, { dataSources }, info) => {
    const res = await dataSources.systems.getAll(token);
    return res.systems;
  },
};
