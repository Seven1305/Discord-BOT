const mongoose = require("mongoose");

const puntiElite = new mongoose.Schema({
  user: { type: String, require: true},
  userID: { type: String, require: true, unique: true },
  punti: { type: Number, default: 0 },
});

const model = mongoose.model("CerberusElite", puntiElite);

module.exports = model;