import { Schema, model } from 'mongoose';

const financialProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  ],
  transactions: [
    {
      user: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true,
        default: () => new Date().toLocaleDateString()
      },
      isExpense: {
        type: Boolean,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ]
});

export const FinancialProject = model('FinancialProject', financialProjectSchema);
