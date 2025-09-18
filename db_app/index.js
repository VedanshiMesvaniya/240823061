const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vedu_db_user:1234@myapplication.trtju4l.mongodb.net/?retryWrites=true&w=majority&appName=MyApplication",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema =  new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    gender:String,
    address:String
});

const User = mongoose.model('User', userSchema);
console.log("User model created");


const user = new User({
    name: "Vedanshi",
    age: 20,
    email: "vedanshi@example.com",
    gender: "Female",
    address: "1 rajkot"
});
 
user
    .save()
    .then(()=>{
        console.log("User saved successfully");
    })
    .catch((error) => {
        console.error("Error saving user:", error);
    });