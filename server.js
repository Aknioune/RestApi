

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:"./Config/.env"});

const User = require('./models/User');


const app = express();
app.use(express.json());
// const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // app.listen(PORT, () => {
    //   console.log(`Server listening on port ${PORT}`);
    // });
  })
  .catch((err) => console.error(err));




  
  // Get all users
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Add a new user
  app.post('/users', async (req, res) => {
    const user = new User({
        name: "salma",
        email: "salm@gmail.com",
        password: "14578963256hgdh"
      });
    try {
      const newuser = await user.save();
      
      res.json(newuser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
//EDIT A USER BY ID 
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = "fatima";
      user.email = "salm@gmail.com";
      user.password = "14578963256hgdh";

      const updateUser = await user.save();
      res.json(updateUser);
    }
    else {
      res.json({message: 'user not found'})
    }
  } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });
  
//REMOVE A USER BY ID 

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (user) {
      res.json({message: 'user deleted'})
    }
    else{
      res.json({message: 'user not found'})
    }

  } catch (err)
  {
    res.status(400).json({ message: err.message });
  }
});

  app.listen(3000,"localhost",()=>{
    console.log('Serverjhdkljcdfljf');
  })
  