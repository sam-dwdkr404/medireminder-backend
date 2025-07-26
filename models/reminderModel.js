// backend/models/reminderModel.js

const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  medicineName: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  taken: {
    type: Boolean,
    default: false,
  } // ✅ this closing brace was missing
});

module.exports = mongoose.model("Reminder", reminderSchema);
