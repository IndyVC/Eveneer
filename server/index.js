const { ApolloError, ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers/index");
const AuthAPI = require("./src/datasources/auth");
const BASE = require("./src/config/config");
const axios = require("axios");

axios.defaults.baseURL = BASE;

const dataSources = () => ({
  authAPI: new AuthAPI(),
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
