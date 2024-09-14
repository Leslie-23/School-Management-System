// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// // const bodyParser = require("body-parser")
// const app = express();
// const Routes = require("./routes/route.js");
// dotenv.config();

// const PORT = process.env.PORT || 8080;

// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://paltech-school-management-system.netlify.app",
//     ],
//     credentials: true,
//     exposedHeaders: ["X-Total-Count"],
//     methods: ["GET", "POST", "PATCH", "DELETE"],
//   })
// );

// // app.use(bodyParser.json({ limit: '10mb', extended: true }))
// // app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

// app.use(express.json({ limit: "10mb" }));
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// app.use("/", Routes);
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.listen(PORT, () => {
//   console.log(`Server started at port no. ${PORT}`);
// });

// Load environment variables
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const Routes = require("./routes/route.js"); // Assuming this includes your relevant routes

// Initialize the Express app
const app = express();

// Set the port from environment variables or default to 8080
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      // Allow localhost for development
      "https://paltech-school-management-system.netlify.app", // Allow Netlify frontend
    ],
    credentials: true, // Allow cookies and credentials
    exposedHeaders: ["X-Total-Count"], // Expose any necessary headers
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"], // Allow these methods
  })
);

// Handle preflight OPTIONS requests
app.options("*", cors()); // This explicitly handles preflight requests for all routes

// Middlewares
app.use(express.json({ limit: "10mb" })); // Handle JSON requests
app.use(cookieParser()); // Parse cookies
app.use(morgan("tiny")); // Log HTTP requests

// Use the defined routes (update these with your actual route files)
app.use("/", Routes); // Apply your custom routes

// Simple route to check if the server is running
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});
