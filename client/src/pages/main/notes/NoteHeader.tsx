export default function NoteHeader() {
    return (
        <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)" }} className="bg-white w-full h-[60px] p-2 flex items-center max-md:flex-col">
            <div className="relative w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-search absolute top-1/2 transform -translate-y-1/2 right-2 text-[#4E4E4E]"
                    viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input type="text" className="outline-0 p-2 text-[#4E4E4E] w-full border" placeholder="Seacrh..." />
            </div>
        </div>
    )
}