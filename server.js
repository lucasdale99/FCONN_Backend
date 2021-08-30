import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express()

//apply middleware
app.use(cors())
//server can accept json in body of request
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app
