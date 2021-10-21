import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";

dotenv.config()
const app = express()

//server can accept json in body of request
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
//apply middleware
app.use(cors())

//app.use("/api/v1/restaurants", restaurants)
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8000
const CONNECTION_URL = process.env.FCONN_DB_URI;

mongoose.connect(
    CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    }
)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
})
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})