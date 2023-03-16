const mongoose = require("mongoose");

const schema = mongoose.Schema;

const commentaireSchema = new schema({
  user_id: { type: String },
  user_img: String,
  post_id: String,
  repondre_id: { type: String },
  comm_repondre: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  date: {  
    type:Date,
    default:Date.Now },
  content: { type: String },
  // repondre: [
  //   { user_id: { type: String },
  //   user_img: String,
  //   product_id: String,
  //   commentaire_id: String,
  //   name: { type: String },
  //   lastname: { type: String },
  //   date: { type: Date },
  //   repondre_content: { type: String }}
  // ]
});

const Commentaire = mongoose.model("Commentaire", commentaireSchema);
module.exports = Commentaire;
