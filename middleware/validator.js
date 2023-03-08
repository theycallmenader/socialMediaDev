const {check,validationResult} = require('express-validator');

//* register rules

exports.registerRules=()=>
    [
    check("firstName","Name must be specified").notEmpty(),
    check("lastName","Name must be specified").notEmpty(),
    check("userName","userName is required").notEmpty(),
    check("birthDate","birthdate must be specified").notEmpty(),
    check("password","password is required").isLength({min:8,max:20}),
    check("email","email is required").notEmpty(),
    check("email","check your email again").isEmail(),
    ]


//* Login rules

exports.loginRules=()=>
    [
    check("password","password must be between 8-20 character").isLength({min:8,max:20}),
    check("email","email is required").notEmpty(),
    check("email","check your email again").isEmail(),
    ]
    
//* Exports the error message

exports.validation=(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({
            errors:errors.array().map((el)=>({
                msg:el.msg,
            }))
        });
    }
    next();
}
