const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('./Models/user'); 
const { connectMongoDB } = require('./lib/mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB at the start of the application
connectMongoDB().then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Stop the application if the database connection fails
});

app.post('/authsignup', async (req, response) => {
    const { firstname, lastname, email, password ,username,mobile,confirmpassword} = req.body; 
    try {
        const existingUser = await User.findOne({ username }).maxTimeMS(30000);
        if (existingUser) {
            return response.status(409).json({ message: 'Username already exists' });
        }
        if (password !== confirmpassword) {
            return response.status(400).json({ message: 'Passwords do not match' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({ firstname, lastname, email, mobile, username, password: hashedPassword });
        response.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });  
    }
});




app.post('/authsignin', async (req, response) => {
        
    const {username, dtp, password } = req.body; 
    try {
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return response.status(404).json({ message: 'User not found' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        response.status(200).json({ message: 'User Logged successfully' });
      

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });  
    }




    // Implementation needed here for user login.
    res.status(200).json({ message: 'Login functionality not implemented' });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
