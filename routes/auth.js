const express = require('express');
const bcryptjs = require('bcryptjs');
const authRouter = express.Router();
const User = require('../model/user');  // Ensure this file exists

authRouter.post("/api/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User with same email already exists!" });
        }

        // Hash password before saving
        const hashedPassword = await bcryptjs.hash(password, 8);

        // Create new user
        let user = new User({
            name,
            email,
            password: hashedPassword,
        });

        user = await user.save(); // Save user to the database
        res.status(201).json(user); // Send response with user data

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// SignIn
authRouter.post('api/signin',async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res
            .status(404)
            .json({msg:"User with this email does not exist"});
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.
            status(400).
            json({msg:"Invalid password"});
        }
        const token = jwt.signin({id: user._id},"passwordKey");
        res.json({token,...user_doc});
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
})
module.exports = authRouter;