const Form = require("./form.model");

function AllForms() {
  return Form.find();
}

function AddForm(userinfo) {
  const newuser = new Form(userinfo);
  return newuser.save();
}

module.exports = { AllForms, AddForm };
