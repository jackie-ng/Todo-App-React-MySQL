import express from "express";
import { db } from "./db.js"
const app = express();


app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Read All Tasks
app.get("/task", (req, res) => {
  const q = "SELECT * FROM task";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).json(data)
  })
})

// Add/Create task
app.post("/", () => {

})

//Edit/Update task
app.put("/:id", () => {

})

//Delete task
app.delete("/:id", () => {

})

// set port, listen for request
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
