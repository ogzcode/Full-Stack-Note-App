import { createContext, useContext, useState } from "react";

const NoteUpdateContext = createContext();

export const useNoteUpdateContext = () => useContext(NoteUpdateContext);

export const NoteUpdateProvider = ({ children }) => {
    const [selectedNote, setNote] = useState({});

    const handleUpdate = (noteCopy) => setNote(noteCopy);

    return (
        <NoteUpdateContext.Provider value={{ selectedNote, handleUpdate }}>
            {children}
        </NoteUpdateContext.Provider>
    );
}