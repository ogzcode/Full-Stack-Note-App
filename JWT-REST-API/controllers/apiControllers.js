import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { readFileSync, writeFileSync } from "fs";

export const getTest = (req, res) => {
    res.send("Hello test");
};

export const getAllData = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    res.json(users);
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
        "password": password
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
    res.status(201);
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
