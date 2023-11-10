const { User, } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      getUser: async (parent, args, context) => {
        // Check if the user is authenticated
        if (context.user) {
            // If authenticated, find the user in the database using their ID
          const user = await User.findById(context.user._id);   
          return user;
        }
         // Throw an error if the user is not logged in
        throw new AuthenticationError('Not logged in');
      }
    },
  
  Mutation: {
   
      updateUser: async (parent, {firstName, middleName, lastName, address, city, state, zipcode, phone, ethnicity, maritalStatus, gender, birthDate, language }, context) => {
          console.log(firstName, middleName, lastName, address, city, state, zipcode, phone, ethnicity, maritalStatus, gender, birthDate, language);
          try {
            // Check if the user is authenticated
              if (context.user)  {

                  const user = await User.findOneAndUpdate(
                      { _id: context.user._id }, 
                      { firstName: firstName,
                        middleName: middleName,
                        lastName: lastName,
                        address: address,
                        city: city,
                        state: state,
                        zipcode: zipcode,
                        phone: phone,
                        ethnicity: ethnicity,
                        maritalStatus: maritalStatus,
                        gender: gender,
                        birthDate: birthDate,
                        language: language,
                      },
                      {
                          new: true,
                          runValidators: true,
                      }
                  );
                  return user
              }
          } catch (err) {
              console.log(err);
          }    
          throw new AuthenticationError('Not logged in');
        },
        
        updateInsurance: async (parent, {primaryInsuranceCo, primaryInsuranceID, primaryGroupNo, dentalInsuranceCo, dentalInsuranceID, dentalGroupNo, visionInsuranceCo, visionInsuranceID, visionGroupNo }, context) => {
          console.log(primaryInsuranceCo, primaryInsuranceID, primaryGroupNo, dentalInsuranceCo, dentalInsuranceID, dentalGroupNo, visionInsuranceCo, visionInsuranceID, visionGroupNo);
          try {
            // Check if the user is authenticated
              if (context.user)  {

                  const user = await User.findOneAndUpdate(
                      { _id: context.user._id }, 
                      { primaryInsuranceCo: primaryInsuranceCo,
                        primaryInsuranceID: primaryInsuranceID,
                        primaryGroupNo: primaryGroupNo,
                        dentalInsuranceCo: dentalInsuranceCo,
                        dentalInsuranceID: dentalInsuranceID,
                        dentalGroupNo: dentalGroupNo,
                        visionInsuranceCo: visionInsuranceCo,
                        visionInsuranceID: visionInsuranceID,
                        visionGroupNo: visionGroupNo,
                      },
                      {
                          new: true,
                          runValidators: true,
                      }
                  );
                  return user
              }
          } catch (err) {
              console.log(err);
          }    
          throw new AuthenticationError('Not logged in');
        },

      addUser: async (parents, { firstName, middleName, lastName, email, password, phone }) => {
        // Create a new user in the database
        const user = await User.create({ firstName, middleName, lastName, email, password, phone });
        // Generate a JWT token for the user
        const token = signToken(user);
        // Return the token and the user object 
        return { token, user };
      },

      login: async (parent, { email, password }) => {
        //query database to find one user with email (which should be unique)
        const user = await User.findOne({ email });
        if (!user) {
          // Throw an error if the user is not found
          throw new AuthenticationError('Invalid Login Credentials')
        }
         // Check if the provided password is correct
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
           // Throw an error if the password is incorrect
          throw new AuthenticationError('Invalid Login Credentials');
        }
        // Generate a JWT token for the user
        const token = signToken(user);
        // Return the token and the user object
        return { token, user };
    }
  }
};

module.exports = resolvers;