const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ships: [Ship]
  }

  type Ship {
    type: String
    class: String
    maxCargo: Float
    speed: Float
    manufacturer: String
    plating: Float
    weapons: Float
    purchaseLocations: [Location]
  }

  type Location {
    system: String
    location: String
    price: Float
  }

  type Mutation {
    register(username: String): Signed
    login(username: String, token: String): Signed
  }

  type User {
    username: String
    credits: Float
    ships: [Ship]
  }

  type Signed {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
