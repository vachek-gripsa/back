import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String
  },
  avatar: {
    type: String
  },
  contacts: {
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    },
    telegram: {
      type: String
    },
    linkedinProfile: {
      type: String
    },
    githubProfile: {
      type: String
    }
  },
  financialProjects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'FinancialProject'
    }
  ]
});

export const User = model('User', userSchema);
