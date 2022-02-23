import express from 'express'
import connectDB from './db/connectDB.js'
import web from './routes/web.js';
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.PORT || 'mongodb://localhost:27017'

// Database Connection
connectDB(DATABASE_URL)

app.use(express.urlencoded({ extended: true }));

// Loading Routes
app.use('/', web)

// Setting view engine
app.set('view engine', 'ejs')


app.listen(port, ()=>{
    console.log(`The server is running at port http://localhost:${port}`)
})