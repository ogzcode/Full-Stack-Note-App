import { readFileSync, writeFileSync } from "fs";
import { nanoid } from "nanoid";

export const addNote = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);

    const date = new Date()
    const note = {
        "id": nanoid(),
        "title": req.body.title,
        "content": req.body.content,
        "date": date.toLocaleDateString()
    }
    user.notes.push(note);

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );

    res.status(201).json({
        message: "Note added",
        note: note
    });
};

export const getUserNote = (req, res) => {
    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);

    res.status(200).json({ notes: user.notes });
}

export const deleteNote = (req, res) => {
    const { id } = req.params;

    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);

    const note = user.notes.find(note => note.id === id);
    if (!note) {
        res.status(404).json({ message: "Note not found" });
        return;
    }

    user.notes.splice(user.notes.indexOf(note), 1);

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );

    res.status(204).json({ message: "Deleted"});
}

export const updateNote = (req, res) => {
    const {id, title, content} = req.body;

    let users = JSON.parse(readFileSync("./model/users.json")).users;
    let user = users.find(user => user.email === req.user.userEmail);

    const note = user.notes.find(note => note.id === id);
    if (!note) {
        res.status(404).json({ message: "Note not found" });
        return;
    }

    note.title = title;
    note.content = content;

    writeFileSync(
        "./model/users.json",
        JSON.stringify({ users: users }, null, 2),
        "utf8"
    );

    res.status(200).json({ message: "Updated", note:  note });
}

