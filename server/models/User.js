const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
      },
     address: {
        type: String,
     },
     city: {
        type: String,
     },
     state: {
        type: String,
     },
     zipcode: {
        type: Number,
     },
     phone: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 12,
     },
     ethnicity:{
      type: String,
     },
     maritalStatus: {
      type: String,
     },
     gender:{
      type: String,
     },
     birthDate:{
      type: String,
     },
     language: {
      type: String,
     },
     primaryInsuranceCo:{
      type: String,
     },
     primaryInsuranceID:{
      type: Number,
     },
     primaryGroupNo: {
      type: Number,
     },
     dentalInsuranceCo:{
      type: String,
     },
     dentalInsuranceID:{
      type: Number,
     },
     dentalGroupNo: {
      type: Number,
     },
     visionInsuranceCo:{
      type: String,
     },
     visionInsuranceID:{
      type: Number,
     },
     visionGroupNo: {
      type: Number,
     },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
   if (this.isNew || this.isModified('password')) {
     const saltRounds = 10;
     this.password = await bcrypt.hash(this.password, saltRounds);
   }
 
   next();
 });
 
 // compare the incoming password with the hashed password
 userSchema.methods.isCorrectPassword = async function(password) {
   return await bcrypt.compare(password, this.password);
 };

const User = mongoose.model('User', userSchema);

module.exports = User;