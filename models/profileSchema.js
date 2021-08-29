const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: String, require: true},
  userID: { type: String, require: true, unique: true },
  punti: { type: Number, default: 0 },
});

const model = mongoose.model("CerberusElite", prfileSchema);

module.exports = model;