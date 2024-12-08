import express, { json } from "express";
import cors from "cors";
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


const run = async () => {

}

run().catch(console.dir);

app.get("/", (req,res) => {
  res.send("Sharee's Server Is Running")
})

app.listen(port, () => {
  console.log("App is Running ", port)
})