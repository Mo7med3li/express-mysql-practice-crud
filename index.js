import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

// connection
app.use(express.json());
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "trainingsql",
});

app.listen(port, () => {
  console.log(`sever running on port ${port}`);
});
