import express from "express";
import cors from "cors";

import { auth } from "./auth.js";
import { addNote, getUserNote, deleteNote } from "./controllers/apiControllers.js";
import { register, login} from "./controllers/authController.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.post("/register", register);
app.post("/login", login);

app.post("/add-note", auth, addNote);
app.get("/notes", auth, getUserNote);
app.delete("/delete/:id", auth, deleteNote);

app.listen(3000, () => {
    console.log("Sunucu: localhost:3000");
});