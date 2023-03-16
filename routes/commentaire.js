const express = require("express");
const Commentaire = require("../models/commentaire");
const commentaireRouter = express.Router();

//post
commentaireRouter.post("/add", async (req, res) => {
  try {
    const newCommentaire = new Commentaire(req.body);
    const result = await newCommentaire.save();
    res.status(200).send({ commentaire: result, msg: "produnct is added" });
  } catch (error) {
    res.status(400).send({ msg: "commentaire is not added" });
  }
});

//getall
commentaireRouter.get("/all", async (req, res) => {
  try {
    const result = await Commentaire.find();
    res.status(200).send({ commentaire: result, msg: "all commentaire" });
  } catch (error) {
    res.status(400).send({ msg: "can not find commentaire" });
  }
});
//get by id
commentaireRouter.get("/all/:id", async (req, res) => {
  try {
    const result = await Commentaire.findById(req.params.id);
    res.status(200).send({ commentaire: result, msg: `${result.title} commentaire` });
  } catch (error) {
    res.status(400).send({ msg: "can not find commentaire by id" });
  }
});
//delete
commentaireRouter.delete("/delete/:id", async (req, res) => {
  try {
    const result = await Commentaire.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "commentaire deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete commentaire" });
  }
});
//put
commentaireRouter.put("/update/:id", async (req, res) => {
  try {
    const result = await Commentaire.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send({ Response: result, message: "Commentaire updated" });
  } catch (error) {
    res.status(400).send({ message: `can not update this Commentaire` });
  }
});

//delete all
commentaireRouter.delete("/:title", async (req, res) => {
  try {
    const result = await Commentaire.findAndRemove({
      id: req.params.id,
      title: req.params.title,
    });
    res.status(200).send({ msg: "all commentaire deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete commentaire" });
  }
});
module.exports = commentaireRouter;
