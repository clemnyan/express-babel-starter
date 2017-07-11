import mongoose, { Schema } from 'mongoose';


const FinanceSchema = new Schema({

  Expenditure: [{
    Name: String,
    Amount: Number,
  }],

  Budgetplan: {
    Amount: String,
    Startdate: {
      type: Date },
    EndDate: {
      type: Date },
  },

  Revenue: [{
    Name: String,
    Amount: Number,
    detail: String,
    Day: {
      type: Date,
    },
  }],

});

// create model ClassModel
const FinanceModel = mongoose.model('Finances', FinanceSchema);
export default FinanceModel;
