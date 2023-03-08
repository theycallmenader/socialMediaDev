const express=require("express");

const userRouter = express.Router();
const bcrypt =require("bcrypt");
const User =require("../models/user");
const jwt =require("jsonwebtoken");
const {loginRules,registerRules,validation} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

//* register

userRouter.post('/register',registerRules(),validation, async(req,res)=>{
    const {userName,email,password,firstName,lastName,birthDate}=req.body;
    try{
        const newUser=new User({userName,email,password,firstName,lastName,birthDate});

        //TODO check if user already exists

        const searchedUser=await User.findOne({email});
        if (searchedUser){
            return res.status(400).send({msg:"email already exists"});
        }
        //TODO hash password
        const salt=10;
        const genSalt=await bcrypt.genSalt(salt);
        const hashedPassword=await bcrypt.hash(password,genSalt);
        newUser.password = hashedPassword;

        //TODO save the new user
        const newUserToken =await newUser.save();
        //TODO generate a token

        const payload={
            _id:newUserToken.id,
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:1000 * 60 * 60 * 24,
        });
        res.status(200).send({msg:"Registred Successfully",token: `Bearer ${token}`});
    }
    catch(err){
        res.status(500).send("cant register");
    }
})

//* login

userRouter.post("/login",loginRules(),validation,async(req, res) => {
    const { email, password } = req.body;
    try {
        //TODO find user existance in database

        const searchedUser = await User.findOne({ email });
        if (!searchedUser) {
            return res.status(400).send({ msg: "bad credential" });
        }
        const isMatch =  await bcrypt.compare(password, searchedUser.password);
        //TODO check if password is correct

        if (!isMatch) {
            return res.status(400).send({ msg: "bad credential" });
        }
        const payload={
            _id:searchedUser.id,
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:1000 * 60 * 60 * 24,
        });
        res.status(200).send({ msg: "Login Successful",token });
    } catch (error) {
        res.status(500).send({ msg: "cant login" });
    }
})
//* Update the user profile
userRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await User.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      res.send({ newUser: result, msg: "Sucess" });
    } catch (error) {
      console.log(error);
    }
  });

//* delete user

userRouter.delete("/delete/:id", async (req, res) => {
    try {
      let user = await User.findByIdAndDelete(req.params.id);
      res.send({ msg: "user is deleted" });
    } catch (error) {
      console.log(error);
    }
  });

//* Get user
userRouter.get("/current", isAuth(), (req, res) => {
    res.status(200).send({ user: req.user });
  });



module.exports = userRouter