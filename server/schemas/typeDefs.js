const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    firstName: String
    middleName: String
    lastName: String
    email: String!
    password: String!
    address: String
    city: String
    state: String
    zipcode: Int
    phone: String!
    ethnicity: String
    maritalStatus: String
    gender: String
    birthDate: String
    language: String
    primaryInsuranceCo: String
    primaryInsuranceID: Int
    primaryGroupNo: Int
    dentalInsuranceCo: String
    dentalInsuranceID: Int
    dentalGroupNo: Int
    visionInsuranceCo: String
    visionInsuranceID: Int
    visionGroupNo: Int
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
        firstName: String, middleName: String, lastName: String, address: String, city: String, state: String, zipcode: Int, phone: String!, ethnicity: String,
        maritalStatus: String, gender: String, birthDate: String, language: String
      ): User
      updateInsurance(
        primaryInsuranceCo: String, primaryInsuranceID: Int, primaryGroupNo: Int, dentalInsuranceCo: String,
        dentalInsuranceID: Int, dentalGroupNo: Int, visionInsuranceCo: String, visionInsuranceID: Int, visionGroupNo: Int
      ): User
    addUser(firstName: String, middleName: String, lastName: String, email: String!, password: String!, phone: String!): Auth
    login(email: String!, password: String!): Auth
}`;

module.exports = typeDefs;
