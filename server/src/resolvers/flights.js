module.exports = {
  flights: async (parent, { token, system }, { dataSources }, info) => {
    try {
      const res = await dataSources.flights.getAll(token, system);
      return res.flightPlans;
    } catch (e) {
      console.log(e.response.data.error.message);
    }
  },

  flight: async (
    parent,
    { token, username, flightId },
    { dataSources },
    info
  ) => {
    try {
      const res = await dataSources.flights.get(token, username, flightId);
      return res.flightPlan;
    } catch (e) {
      console.log(e.response.data.error.message);
    }
  },
};
