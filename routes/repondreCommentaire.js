const express = require("express");
const RepondreCommentaire = require("../models/repondreCommentaire");
const repondreCommentaireRouter = express.Router();

//post
repondreCommentaireRouter.post("/add", async (req, res) => {
  try {
    const newRepondreCommentaire = new RepondreCommentaire(req.body);
    const result = await newRepondreCommentaire.save();
    res.status(200).send({ repondreCommentaire: result, msg: "repondre is added" });
  } catch (error) {
    res.status(400).send({ msg: "repondreCommentaire is not added" });
  }
});

//getall
repondreCommentaireRouter.get("/all", async (req, res) => {
  try {
    const result = await RepondreCommentaire.find();
    res.status(200).send({ repondreCommentaire: result, msg: "all repondreCommentaire" });
  } catch (error) {
    res.status(400).send({ msg: "can not find repondreCommentaire" });
  }
});
//get by id
repondreCommentaireRouter.get("/all/:id", async (req, res) => {
  try {
    const result = await RepondreCommentaire.findById(req.params.id);
    res.status(200).send({ repondreCommentaire: result, msg: `${result.name} repondreCommentaire` });
  } catch (error) {
    res.status(400).send({ msg: "can not find repondreCommentaire by id" });
  }
});
//delete
repondreCommentaireRouter.delete("/delete/:id", async (req, res) => {
  try {
    const result = await RepondreCommentaire.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "repondreCommentaire deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete repondreCommentaire" });
  }
});
//put
repondreCommentaireRouter.put("/update/:id", async (req, res) => {
  try {
    const result = await RepondreCommentaire.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send({ Response: result, message: "RepondreCommentaire updated" });
  } catch (error) {
    res.status(400).send({ message: `can not update this RepondreCommentaire` });
  }
});

//delete all
repondreCommentaireRouter.delete("/:title", async (req, res) => {
  try {
    const result = await RepondreCommentaire.findAndRemove({
      id: req.params.id,
      title: req.params.title,
    });
    res.status(200).send({ msg: "all repondreCommentaire deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete repondreCommentaire" });
  }
});
module.exports = repondreCommentaireRouter;
