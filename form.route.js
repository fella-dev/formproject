const express = require("express");
const { AllForms, AddForm } = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    AllForms().then((data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", (req, res) => {
  const userinfo = req.body;
  try {
    AddForm(userinfo).then((data) => {
      res.send(data);
      console.log("user registred");
    });
  } catch (error) {
    console.log(error);
    res.status(404);
    res.send("erreur d'envoie");
  }
});

module.exports = router;
