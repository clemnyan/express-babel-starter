import mongoose, { Schema } from 'mongoose';


const MeetingsSchema = new Schema({

  detail: String,
  dates: {
    type: Date,
    Default: Date.now,
  },

  Userfrom: {
    type: Schema.ObjectId,
    ref: 'User',
  },

  vote: {
    up: Boolean,
    down: Boolean,
  },

});

// create model ClassModel
const MeetingsModel = mongoose.model('meet', MeetingsSchema);
export default MeetingsModel;
