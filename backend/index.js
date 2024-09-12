const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser")
const app = express();
const Routes = require("./routes/route.js");
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://paltech-school-management-system.netlify.app",
    ],
    credentials: true,
    exposedHeaders: ["X-Total-Count"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: "10mb" }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use("/", Routes);
app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});
