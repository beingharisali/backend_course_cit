const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'Please fill first name'],
        minLength:[3, "First name should beat least of 3 characters"],
        maxLength:[50, 'First name should not exceed 50 characters']
    },
    lastName:{
        type:String,
        required:[true, 'Please fill Last name'],
        minLength:[3, "Last name should beat least of 3 characters"],
        maxLength:[50, 'Last name should not exceed 50 characters']
    },
    email:{
        type:String,
        required:[true, 'Please fill Email'],
        unique:true,
        maxLength:[50, 'Email should not exceed 50 characters']
    },
    password:{
        type:String,
        required:[true, 'Please fill Password'],
        minLength:[8, 'Password should be at least of 8 characters']
    },
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel