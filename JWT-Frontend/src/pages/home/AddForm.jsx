import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClear } from "react-icons/ai";

import { useToggleContext } from "../../context/useToggleContext";
import { addNoteThunk, setSelectedNote, updateNoteThunk } from "../../redux/slice/noteSlice";

export default function AuthComponent() {
    const selectedNote = useSelector(state => state.note.selectedNote);
    const [title, setTitle] = useState(selectedNote.title || "");
    const [content, setContent] = useState(selectedNote.content || "");
    const notes = useSelector(state => state.note.notes);
    const { toggle } = useToggleContext();
    const dispatch = useDispatch();

    useEffect(() => {
        setTitle(selectedNote.title || "");
        setContent(selectedNote.content || "");
    }, [selectedNote]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title.trim() === "" || content.trim() === "") {
            return;
        }

        if (selectedNote.title) {
            await dispatch(updateNoteThunk({ id: selectedNote.id, title, content }));
        } else {
            await dispatch(addNoteThunk({ title, content }));
        }

        setTitle("");
        setContent("");
        dispatch(setSelectedNote({}));
    }

    const handleClear = () => {
        setTitle("");
        setContent("");
        dispatch(setSelectedNote({}));
    }

    return (
        <div style={{ transition: "left 0.3s ease-in-out" }} className={`sidebar relative ${toggle ? "w-3/4 left-1/4" : "w-full left-0"}`}>
            {
                Object.keys(selectedNote).length > 0 && <button onClick={() => handleClear()} className="text-white absolute right-6 text-2xl cursor-pointer"><AiOutlineClear /></button>
            }
            <form onSubmit={handleSubmit}>
                <div className="flex mb-4">
                    <button type="submit" className="bg-white text-teal-900 font-medium ml-2 px-8 mr-6 rounded-md shadow-xl">{selectedNote.title ? "Update" : "Add"}</button>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Write Note Title" className="w-full p-2 rounded-md text-white text-lg bg-transparent outline-0" />
                </div>
                <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write Note Content" className="block w-full min-h-screen bg-transparent p-2 text-white outline-0 resize-none" />
            </form>
        </div>
    );
}