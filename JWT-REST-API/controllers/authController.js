import { readFileSync, writeFileSync } from "fs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

export const register = (req, res) => {
    const { email, password } = req.body;

    let users = JSON.parse(readFileSync("./model/users.json")).users;

    //if new user exist
    const oldUser = users.find(user => user.email === email);
    if (oldUser) {
        return res.status(409).json({ message: "User Already Exist. Please Login" });
    }

    //create new user
    const user = {
        "id": nanoid(),
        "firstName": "",
        "lastName": "",
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

    if (!user || !req.body.password) {
        return res.status(404).json({ message: "Email and password not found!! Please register." });
    }

    if (user.password !== req.body.password) {
        return res.status(400).json({
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
