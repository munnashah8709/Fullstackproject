const express=require("express")
var cors = require('cors');
require("dotenv").config();
const port =8000;
const app=express()
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
require("../Backend/Components/Connection/Connect")
const oppsenginedata=require("../Backend/Components/Model/Registration");
const secret="mynameismunnashahiamwithrahul";



app.post("/signup", async (req, res) => {
    try {
      const eamilid=req.body.email;
      const emaildata = await oppsenginedata.findOne({ email: eamilid});
      if(emaildata){
        return  res.send("email is used")
      }
          bcrypt.hash(req.body.password, 10, async function (hashError, hash) {
            if (hashError) {
              return res.json({message:hashError});
            }
              const data = new oppsenginedata({
                username: req.body.username,
                email: req.body.email,
                password: hash,
              }); 
              const senddata = await data.save().then(() => {res.send("successfull");}).catch((err) => {
                console.log(err);
               });
          });
      } catch (e) {
      res.send(e);
    }
  });



app.post('/login',(req,res)=>{
  
    const email=req.body.email;
    const passwords=req.body.password;
    if (!email || !passwords ) {
        return res.status(422).json({ error: "please add email or password" })
    }

    oppsenginedata.findOne({ email: email })
        .then((savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "inValid email or password" })
}
bcrypt.compare(passwords,savedUser.password)
.then(doMatch=>{
    if(doMatch){
        const token=jwt.sign({_id:savedUser._id},secret)
        res.json({token, user:{email:savedUser.email,username:savedUser.username, id:savedUser._id, message:"success"}})
    }
    else{
        return res.status(422).json({ error: "inValid email or password" })
    }
})

}))
})









app.listen(port, ()=>{
    console.log("server starting on port "+ port)
})