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
   
      updateUser: async (parent, {avatar}, context) => {
          console.log(avatar);
          try {
            // Check if the user is authenticated
              if (context.user)  {

                  const user = await User.findOneAndUpdate(
                      { _id: context.user._id }, 
                      { avatar: avatar }, 
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

      addUser: async (parents, { name, email, password, address, city, zipcode, phone, avatar, foodDonations, donations }) => {
        // Create a new user in the database
        const user = await User.create({ name, email, password, address, city, zipcode, phone, avatar, foodDonations, donations });
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