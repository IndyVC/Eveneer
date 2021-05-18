module.exports = {
  Mutation: {
    ...require("./auth"),
  },
  Query: {
    ...require("./systems"),
    ...require("./flights"),
    ...require("./game"),
  },
};
