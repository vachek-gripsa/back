import { Schema, model } from 'mongoose';

const financialTransactionSchema = new Schema({
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
});

export const FinancialTransaction = model('FinancialTransaction', financialTransactionSchema);
