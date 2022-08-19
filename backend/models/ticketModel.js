const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    product: {
      type: String,
      required: [true, 'Please add a product'],
      enum: ['iPhone', 'MacBook Pro', 'iMac', 'ipad'],
    },

    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
      unique: true,
    },

    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);
