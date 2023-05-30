import express from "express";
import cors from "cors";

import { auth } from "./auth.js";
import { getTest, addNote, getUserNote, deleteNote, updateProfile } from "./controllers/apiControllers.js";
import { register, login, getAuthUser, deleteUser} from "./controllers/authController.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/test", getTest);

app.post("/register", register);
app.post("/login", login);

app.delete("/auth/deleteUser", auth, deleteUser);

app.get("/auth", auth, getAuthUser);
app.post("/auth/addNote", auth, addNote);
app.get("/auth/notes", auth, getUserNote);
app.delete("/auth/delete", auth, deleteNote);
app.patch("/auth/updateProfile", auth, updateProfile);

app.listen(3000, () => {
    console.log("Sunucu: localhost:3000");
});