const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    systems(token: String): [System]
    flights(token: String, system: String): [Flight]
    flight(token: String, username: String, flightId: String): FlightDetail
    status: String
    leaderboard:Leaderboard
  }

  type Mutation {
    register(username: String): Signed
    login(username: String, token: String): Signed
  }

  type System {
    symbol: String
    name: String
    locations: [Location]
  }

  type Location {
    symbol: String
    type: String
    name: String
    x: Float
    y: Float
  }

  type Flight {
    arrivesAt: String
    createdAt: String
    departure: String
    destination: String
    id: String
    shipId: String
    shipType: String
    username: String
  }

  type FlightDetail {
    arrivesAt: String
    createdAt: String
    departure: String
    destination: String
    distance: Float
    fuelConsumed: Float
    fuelRemaining: Float
    id: String
    shipId: String
    terminatedAt: String
    timeRemainingInSeconds: Float
  }

type Leaderboard{

}

  type Signed {
    token: String
    user: User
  }

  type User {
    username: String
    credits: Float
  }

  type ErrorMessage {
    message: String
  }
`;

module.exports = typeDefs;
