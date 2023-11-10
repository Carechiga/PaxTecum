import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String
    $middleName: String
    $lastName: String
    $email: String!
    $password: String!
    $phone: String!
  ) {
    addUser(
      firstName: $firstName
      middleName: $middleName
      lastName: $lastName
      email: $email
      password: $password
      phone: $phone
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql` 
  mutation updateUser(
    $firstName: String
    $middleName: String
    $lastName: String
    $address: String
    $city: String
    $state: String
    $zipcode: Int
    $phone: String!
    $ethnicity: String
    $maritalStatus: String
    $gender: String
    $birthDate: String
    $language: String
  ) {
    updateUser(
      firstName: $firstName
      middleName: $middleName
      lastName: $lastName
      address: $address
      city: $city
      state: $state
      zipcode: $zipcode
      phone: $phone
      ethnicity: $ethnicity
      maritalStatus: $maritalStatus
      gender: $gender
      birthDate: $birthDate
      language: $language
    ) {
      _id
      firstName
      middleName
      lastName
      email
      password
      address
      city
      state
      zipcode
      phone
      ethnicity
      maritalStatus
      gender
      birthDate
      language
      primaryInsuranceCo
      primaryInsuranceID
      primaryGroupNo
      dentalInsuranceCo
      dentalInsuranceID
      dentalGroupNo
      visionInsuranceCo
      visionInsuranceID
      visionGroupNo
    }
  }`;

export const UPDATE_INSURANCE = gql` 
  mutation updateUser(
    $primaryInsuranceCompany: String
    $primaryInsuranceID: Int
    $primaryGroupNumber: Int
    $dentalInsuranceCompany: String
    $dentalInsuranceID: Int
    $dentalGroupNumber: Int
    $visionInsuranceCompany: String
    $visionInsuranceID: Int
    $visionGroupNumber: Int
  ) {
    updateUser(
      primaryInsuranceCo: $primaryInsuranceCo
      primaryInsuranceID: $primaryInsuranceID
      primaryGroupNo: $primaryGroupNo
      dentalInsuranceCo: $dentalInsuranceCo
      dentalInsuranceID: $dentalInuranceID
      dentalGroupNo: $dentalGroupNo
      visionInsuranceCo: $visionsInsuranceCo
      visionInsuranceID: $visionInsuranceID
      visionGroupNo: $visionGroupNo
    ) {
      _id
      firstName
      middleName
      lastName
      email
      password
      address
      city
      state
      zipcode
      phone
      ethnicity
      maritalStatus
      gender
      birthDate
      language
      primaryInsuranceCo
      primaryInsuranceID
      primaryGroupNo
      dentalInsuranceCo
      dentalInsuranceID
      dentalGroupNo
      visionInsuranceCo
      visionInsuranceID
      visionGroupNo
    }
  }`;