import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuTrash2 }  from "react-icons/lu"


import { useToggleContext } from "../../context/useToggleContext";
import { useNoteUpdateContext } from "../../context/useNoteUpdateContext";

import { getAllNoteThunk, deleteNoteThunk } from "../../redux/slice/noteSlice";

function Note({ note }) {
    const { handleUpdate } = useNoteUpdateContext();

    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        await dispatch(deleteNoteThunk(id));
    }

    return (
        <div className="relative border-b border-slate-300 py-4 px-4 cursor-pointer" onClick={() => handleUpdate(note)}>
            <h4 className="text-xl text-white font-semibold">{note.title}</h4>
            <p className="text-sm text-slate-300 w-3/4" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                {note.content}
            </p>
            <button onClick={() => handleDelete(note.id)} className="absolute text-red-500 right-0 top-1/2 -translate-y-1/2 text-xl cursor-pointer mx-6"><LuTrash2 /></button>
        </div>
    );
}

export default function NoteList() {
    const notes = useSelector(state => state.note.notes);
    const { toggle } = useToggleContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (notes.length === 0) {
            dispatch(getAllNoteThunk());
        }
    }, []);

    return (
        <div className={`sidebar absolute min-h-full top-0 left-0 z-10 overflow-hidden ${toggle ? "w-1/4 border-r" : "w-0"}`}>
            {
                notes.length > 0 ? (
                    notes.map((note, i) => <Note key={i} note={note} />)
                ) : (
                    <div className="text-center py-4 text-white text-xl font-semibold">
                        No Notes Found
                    </div>
                )
            }
        </div>
    );
}