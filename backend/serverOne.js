const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")

const userRouter = require("./route/UserRoute")
const sellerRouter = require('./route/SellerRoute')
const productRouter = require("./route/ProductRoute")
const bodyParser = require('body-parser');

// Connect server to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database is connected successfully");
    })
    .catch((err) => {
        console.log(err);
    })


// Configure body-parser middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// Cors middleware
app.use(cors())
// middlewae for post http model
app.use(express.json())
// middlewae for user router
app.use("/api", userRouter)
// middlewae for user router
app.use("/api", sellerRouter)
// middlewae for user router
app.use("/api", productRouter)


const PORT = 9000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
