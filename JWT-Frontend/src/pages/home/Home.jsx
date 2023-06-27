import AddForm from "./AddForm";
import NoteList from "./NoteList";

function Home() {
    return (
        <div className={`min-h-screen relative p-4`}>
            <NoteList />
            <AddForm />
        </div>
    );
}

export default Home;