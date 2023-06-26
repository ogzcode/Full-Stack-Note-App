import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClear } from "react-icons/ai";

import { useToggleContext } from "../../context/useToggleContext";
import { useNoteUpdateContext } from "../../context/useNoteUpdateContext";
import { addNoteThunk } from "../../redux/slice/noteSlice";

export default function AuthComponent() {
    const { selectedNote, handleUpdate } = useNoteUpdateContext();
    console.log(selectedNote);
    const [title, setTitle] = useState(selectedNote.title || "");
    const [content, setContent] = useState(selectedNote.content || "");
    const { toggle } = useToggleContext();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (title.trim() === "" || content.trim() === "") {
            return;
        }

        await dispatch(addNoteThunk({ title, content }));
        setTitle("");
        setContent("");
    }

    const handleClear = () => {
        setTitle("");
        setContent("");
        handleUpdate({});
    }

    return (
        <div style={{ transition: "left 0.3s ease-in-out" }} className={`sidebar relative ${toggle ? "w-3/4 left-1/4" : "w-full left-0"}`}>
            {
                Object.keys(selectedNote).length > 0 && <button className="text-white absolute right-6 text-2xl cursor-pointer"><AiOutlineClear/></button>
            }
            <form onSubmit={handleSubmit}>
                <div className="flex mb-4">
                    <button type="submit" className="bg-white text-teal-900 ml-2 px-8 mr-6 rounded-md">Add</button>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Write Note Title" className="w-full p-2 rounded-md text-white text-lg bg-transparent outline-0" />
                </div>
                <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write Note Content" className="block w-full min-h-screen bg-transparent p-2 text-white outline-0 resize-none" />
            </form>
        </div>
    );
}