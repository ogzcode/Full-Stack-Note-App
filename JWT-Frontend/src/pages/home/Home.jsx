import AddForm from "./AddForm";
import NoteList from "./NoteList";

import { NoteUpdateProvider } from "../../context/useNoteUpdateContext";

function Home() {
    return (
        <NoteUpdateProvider>
            <div className={`min-h-screen relative p-4`}>
                <NoteList />
                <AddForm />
            </div>
        </NoteUpdateProvider>
    );
}

export default Home;