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

// fetch users
app.get("/users", (req, res) => {
  conn.execute(`SELECT * FROM USERS`, (err, data) => {
    res.status(200).json({ message: "success", users: data });
  });
});

// fetch specific user
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  conn.execute(`SELECT * FROM USERS where id=${id}`, (err, data) => {
    res.status(200).json({ message: "success", user: data });
  });
});

app.listen(port, () => {
  console.log(`sever running on port ${port}`);
});
