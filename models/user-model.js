const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageModel = require('./message.js');
const EventsModel = require('./events.js');


const userSchema = new Schema(
    {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: { type: String,
                required: true
    },
    instrument: {
      type: String,
      required: true,
    },
    prof_pic: {
      type: String
    },
    messages: [ MessageModel.schema ],
    sentMessages: [ MessageModel.schema ],
    events: [ EventsModel.schema ],
    grades: [],
    ratingHistory: []
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;