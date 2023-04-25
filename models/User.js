const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// const users = [
//     { name: 'Ali',email:'jxldjcldjl@gmail.com', password: '45jhgyjtgyu'},
//     { name: 'Insaf',email:'jxldjcldjl@gmail.com', password: '45jhgyjtgyu'},
//     { name: 'yassine',email:'jxldjcldjl@gmail.com', password: '45jhgyjtgyu'},
//   ];
  
//   User.create(users)
//     .then(() => {
//       console.log('People are saved');
//     })
//     .catch((error) => {
//       console.log(error);
//     });


module.exports = User;


