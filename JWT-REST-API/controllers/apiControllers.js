import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { readFileSync, writeFileSync } from "fs";

export const getTest = (req, res) => {
    res.send("Hello test");
};

export const register = (req, res) => {
    const { email, password } = req.body;

    let users = JSON.parse(readFileSync("./model/users.json")).users;

    if (!(email && password)) {
        res.status(400).send("All input is required");
    }

    //if new user exist
    const oldUser = users.find(user => user.email === email);
    if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
    }

    //create new user
    const user = {
        "id": nanoid(),
        "email": email,
        "password": password,
        "notes": []
    };

    // Create token
    const token = jwt.sign(
        { user_id: user.id, email },
        "RANDOM-TOKEN",
        {
            expiresIn: "1h",
        }
    );
    // save user token
    user.token = token;

    users.push(user);

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );

    // return new user
    res.status(201).json({ message: "User added" });
};

export const login = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;

    let user = users.find(user => user.email === req.body.email);

    if (!user) {
        res.status(404).send({ message: "Email not found" });
    }

    if (user.password !== req.body.password) {
        res.status(400).send({
            message: "Passwords does not match",
        });
    }

    const token = jwt.sign(
        {
            userId: user.id,
            userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "1h" }
    );

    res.status(200).send({
        message: "Login Successful",
        email: user.email,
        token,
    });
};

export const getAuthUser = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);
    res.json({ message: "You are authorized to access me", user });
}

export const addNote = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);

    const date = new Date()
    user.notes.push({
        "title": req.body.title,
        "content": req.body.content,
        "date": date.toLocaleDateString()
    });

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );
    
    res.status(201).send("Your note is created");
};

export const getUserNote = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.email);

    res.status(200).json({ notes: user.notes });
}

export const deleteNote = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);
    console.log("hello");
    user.notes.splice(req.body.index, 1);

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );

    res.status(204).send({ message: "Deleted"});
}