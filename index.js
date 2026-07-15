require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const connectDB = require('./db/connect')
connectDB()
const productRouter = require('./routes/product')
const userRouter = require('./routes/users')


app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())
app.use('/api/v1', productRouter)
app.use('/api/v1/users', userRouter)

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