const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  country: String,
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;
