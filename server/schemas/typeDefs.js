const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    name: String
    email: String
    password: String
    address: String
    city: String
    zipcode: Int
    phone: String
    avatar: String
    foodDonations: [FoodDonation]
    donations: [Donation]
}

type Auth {
    token: ID!
    user: User
  }

type Session {
    session: String!
}

type Query {
    getUser: User
    order: Session
}

type Mutation {
    updateUser(
        avatar: String
      ): User
    addUser(name: String!, email: String!, password: String!, address: String!, city: String!, zipcode: Int!, phone: String!, avatar: String): Auth
    login(email: String!, password: String!): Auth
    addFoodDonation(date: String!, time: String!, address: String!, city: String!, zip: String!, comment: String!): FoodDonation
}`;

module.exports = typeDefs;