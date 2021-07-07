const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountsSchema);

module.exports = Account;
