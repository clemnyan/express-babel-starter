import mongoose, { Schema } from 'mongoose';


const ChatSchema = new Schema({

  detail: String,
  dateSend: {
    type: Date,
    Default: Date.now,
  },

  Userfrom: {
    type: Schema.ObjectId,
    ref: 'User',
  },
});

// create model ClassModel
const ChatModel = mongoose.model('chat', ChatSchema);
export default ChatModel;
