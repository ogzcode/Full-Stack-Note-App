import express from "express";

import { auth } from "./auth.js";
import { getTest, getAllData, register, login } from "./controllers/apiControllers.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.get("/test", getTest);
app.get("/all", getAllData);

app.post("/register", register);

app.post("/login", login);

app.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
});

app.get("/auth-endpoint", auth, (request, response) => {
    response.json({ message: "You are authorized to access me" });
});

app.listen(3000, () => {
    console.log("Sunucu: localhost:3000");
});