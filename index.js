require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const connectDB = require('./db/connect')
connectDB()
const productRouter = require('./routes/product')

app.use('/api/v1', productRouter)

app.get('/health', (req, res)=>{
    try {
        res.status(200).json({
            success:true,
            msg:"Health is fine"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Internal Server Error",
            error
        })
    }
})

app.listen(port, ()=>{
    console.log(`Server is up and listening on port ${port}`)
})