import { readFileSync, writeFileSync } from "fs";

export const getTest = (req, res) => {
    res.send("Hello test");
};

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

    user.notes.splice(req.body.index, 1);

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );

    res.status(204).send({ message: "Deleted"});
}

export const updateProfile = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);

    console.log(req.body);
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.password = req.body.newPassword || user.password;

    console.log(user.firstName, user.lastName, user.password);

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );

    res.status(200);
};

