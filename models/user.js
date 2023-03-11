const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  userName: {
    type: String,
    required: true,
  },
   firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   date: {
  //     type: Date,
  //   },

//   code_postale: {
//     type: Number,
//   },
//   phone_number: {
//     type: Number,
//     // required: true,
//   },

  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
