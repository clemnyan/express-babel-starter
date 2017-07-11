import mongoose, { Schema } from 'mongoose';


const NoteSchema = new Schema({

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
const NotificationModel = mongoose.model('notes', NoteSchema);
export default NotificationModel;
