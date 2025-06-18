  const User = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require('../services/auth');
const bcrypt = require('bcrypt');

async function signup(req, res) {
    try {
        const { username, email, password } = req.body;
        
        // Hash the password before storing
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const newuser = await User.create({
            username: username,
            email: email,
            password: hashedPassword 
        });
        
        res.redirect("/user/login");
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).send("Error creating user");
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;
        
       
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.send("Invalid username or password");
        }
        
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.send("Invalid username or password");
        }
        
        const token = setUser(user);
        res.cookie("uid", token);
        res.redirect('/url/mainpage');
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send("Error during login");
    }
}

module.exports = { signup, login };
