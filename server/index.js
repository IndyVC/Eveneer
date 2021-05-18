//EXTERNAL
const { ApolloError, ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = require("./src/schema");

//RESOLVER
const resolvers = require("./src/resolvers/index");

//DATASOURCES
const Auth = require("./src/datasources/auth");
const Systems = require("./src/datasources/systems");
const Flights = require("./src/datasources/flights");
const Game = require("./src/datasources/game");
const Leaderboard = require("./src/datasources/leaderboard");

//CONFIG
const BASE = require("./src/config/config");
const Leaderboard = require("./src/datasources/leaderboard");

axios.defaults.baseURL = BASE;

const dataSources = () => ({
  auth: new Auth(),
  systems: new Systems(),
  flights: new Flights(),
  game: new Game(),
  leaderboard: new Leaderboard(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug: true,
  formatError: (err) => {
    console.log(err);
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
