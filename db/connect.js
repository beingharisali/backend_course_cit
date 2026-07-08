const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`DB CONNECT SUCCESSFULLY`)
    }).catch(err=>{
        console.log(`ERROR IN DB CONNECTION : ${err}`)
    })
}
module.exports = connectDB