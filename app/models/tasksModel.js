import mongoose, { Schema } from 'mongoose';


const TaskSchema = new Schema({

  detail: String,
  Startdate: { type: Date, default: Date.now },
  Admins: [{
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  }],

  Milestones: [{
    Name: String,
    Progress: [{ detail: String }],
    Accomplished: Boolean,
  }],

  Members: [{
    type: Schema.ObjectId,
    ref: 'User',

  }],
  BudgetAllocation: {
    Type: Schema.ObjectId,
    ref: 'Finances',
  },
});


// create model ClassModel
const TasksModel = mongoose.model('Tasks', TaskSchema);
export default TasksModel;
