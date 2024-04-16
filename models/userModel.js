const mongoose = require("mongoose");

//schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    mobile: {
      type: String,
      required: [true, "mobile number is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    state: {
      type: String,
      required: [true, "state is required"],
    },
    zip: {
      type: String,
      required: [true, "zip is required"],
    },
    dealer: {
      type: String,
      required: [true, "dealer is required"],
    },
  },
  { timestamps: true }
);

//export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
