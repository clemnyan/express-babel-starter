import mongoose, { Schema } from 'mongoose';

// a schema for the whole cooperative

const CooperativeShema = new Schema({
  contact: {
    name: String,
    email: String,
    phone: String,
  },

  description: String,

  president: [{
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  }],

  financeAdmin: [{
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  }],

  secretary: [{
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  }],

  otherAdmin: [{
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  }],

  members: [{
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  }],

  projects: [{
    type: Schema.ObjectId,
    ref: 'Tasks',
  }],

  notifications: [{
    type: Schema.ObjectId,
    ref: 'notes',
  }],

  meetings: [{
    type: Schema.ObjectId,
    ref: 'meet',
  }],

  financeplan: {
    type: Schema.ObjectId,
    ref: 'Finances',
  },

  subscriptions: [{
    Username: {
      type: Schema.ObjectId,
      ref: 'User',
    },
    amount: Number,
    target: Number,
  }],
/*
  userChat: {
    type: Schema.ObjectId,
    ref: 'chat',
  },*/
});

// create model class
const CooperativeModel = mongoose.model('cooperative', CooperativeShema);

export default CooperativeModel;
