const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let Account = mongoose.model("Account", AccountSchema);
module.exports = Account;
