const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ROUTER DEFINED
const indexOfRouter = require("./routes");

app.use("/apiv1", indexOfRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
