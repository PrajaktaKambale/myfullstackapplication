import app from "./app";
import dotenv from "dotenv";

dotenv.config();

// Set the port (default to 5000 if not provided)
const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
