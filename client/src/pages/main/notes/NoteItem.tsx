export default function NoteItem() {
    return (
        <div className="note__item w-full p-4 bg-white mb-8 transition duration-300 hover:shadow-lg">
            <div className="flex justify-between items-center w-full mb-4">
                <h1 className="font-montserrat-medium text-[#4E4E4E]">Day and night plan</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    className={`bi bi-paperclip rotate-45 ${false ? "fill-[#FFB636]" : "fill-[#4E4E4E]"}`}
                    viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg>
            </div>
            <div className="font-montserrat-regular flex justify-between items-center text-[#787878]">
                <p className="text-xs">Write your second songs...</p>
                <p className="text-xs">1 days ago</p>
            </div>
        </div>
    );
}