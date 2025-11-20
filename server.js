import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(logger);     

app.use("/users", userRoutes);

 
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
 
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
