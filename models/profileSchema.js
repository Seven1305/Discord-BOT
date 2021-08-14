const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: String, require: true},
  userID: { type: String, require: true, unique: true },
  luglio: { type: Number, default: 0 },
  agosto: { type: Number, default: 0 },
  settembre: { type: Number, default: 0 },
  ottobre: { type: Number, default: 0 },
  novembre: { type: Number, default: 0 },
});

const model = mongoose.model("CerberusElite", profileSchema);

module.exports = model;