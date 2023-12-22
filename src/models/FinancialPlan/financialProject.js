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
      type: Schema.Types.ObjectId,
      ref: 'FinancialTransaction'
    }
  ]
});

export const FinancialProject = model('FinancialProject', financialProjectSchema);
