import { gql } from '@apollo/client';

const GET_USER = gql`
query getUser {
    getUser {
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

export { GET_USER }