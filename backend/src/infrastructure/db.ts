import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const connectDB = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Database connected successfully");
    connection.release(); // Release connection back to the pool
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

connectDB();
