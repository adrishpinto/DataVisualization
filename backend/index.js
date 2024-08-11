import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import regRouter from "./dataRouter.js";

const PORT = process.env.PORT || 5001;
const app = express();
mongoose.connect(
  "mongodb+srv://dvbase:1234@clusterdv.umsal77.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDV",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));
app.use(cors());
app.use(express.json());
app.use(regRouter)
// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
