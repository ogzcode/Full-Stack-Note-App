import "../../../assets/css/note.css";
import NoteItem from "./NoteItem";
import NoteHeader from "./NoteHeader";

function Notes() {
    return (
        <div className="note__box flex flex-col items-start w-full pr-2">
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <NoteItem key={index} />
                ))
            }
        </div>
    )
}


export default function NoteSide() {
    return (
        <div className="col-span-5 lg:col-span-4 bg-[#E3EAE46B] p-6 flex flex-col gap-12">
            <NoteHeader />
            <Notes />
        </div>
    )
}