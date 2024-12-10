const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6i5nu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const port = process.env.PORT || 5000;

console.log(process.env.DB_PASS);

const run = async () => {
   
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Sharee,s House Server Is runing");
});

app.listen(port, () => {
  console.log("App Running at ", port);
});
