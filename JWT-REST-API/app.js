import express from "express";
import cors from "cors";

import { auth } from "./auth.js";
import { getTest, register, login, getAuthUser, addNote, getUserNote, deleteNote } from "./controllers/apiControllers.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/test", getTest);

app.post("/register", register);
app.post("/login", login);

app.get("/auth", auth, getAuthUser);
app.post("/auth/addNote", auth, addNote);
app.get("/auth/notes", auth, getUserNote);
app.delete("/auth/delete", auth, deleteNote);

app.listen(3000, () => {
    console.log("Sunucu: localhost:3000");
});