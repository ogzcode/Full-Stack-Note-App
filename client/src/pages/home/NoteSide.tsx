import "../../assets/css/note.css";

function Note() {
    return (
        <div className="note__box flex flex-col items-start w-full max-h-[640px] pr-2 overflow-y-scroll overflow-hidden">
            <div style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)" }} className="w-full p-4 bg-white mb-8">
                <div className="flex justify-between items-center w-full mb-4">
                    <h1 className="font-montserrat-medium text-[#4E4E4E]">Day and night plan</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                        className="bi bi-paperclip rotate-45 text-[#FFB636]"
                        viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>
                </div>
                <div className="font-montserrat-regular flex justify-between items-center text-[#787878]">
                    <p className="text-xs">Write your second songs...</p>
                    <p className="text-xs">1 days ago</p>
                </div>
            </div>
            {
                [1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div className="w-full p-4 bg-white mb-8" key={index}>
                        <div className="flex justify-between items-center w-full mb-4">
                            <h1 className="font-montserrat-medium text-[#4E4E4E]">Day and night plan</h1>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-paperclip rotate-45 text-[#FFB636]"
                                viewBox="0 0 16 16">
                                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                            </svg> */}
                        </div>
                        <div className="font-montserrat-regular flex justify-between items-center text-sm text-[#4E4E4E]">
                            <p className="text-xs">Write your second songs...</p>
                            <p className="text-xs">1 days ago</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

function NoteHeader() {
    return (
        <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)" }} className="bg-white w-full h-[60px] flex px-8 justify-between items-center">
            <h1 className="font-montserrat-bold text-2xl text-[#4E4E4E]">All Ideas</h1>
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-search absolute top-1/2 transform -translate-y-1/2 right-2 text-[#4E4E4E]"
                    viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input type="text" className="outline-0 px-2 text-[#4E4E4E] focus:border" />
            </div>
        </div>
    )
}


export default function NoteSide() {
    return (
        <div className="col-span-4 bg-[#E3EAE46B] p-6 flex flex-col justify-between gap-12">
            <NoteHeader />
            <Note />
            <button className="border border-dashed border-[#FFB636] w-full  flex justify-center items-center h-[60px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-plus-circle-fill fill-[#FFB636] mr-4" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <span className="font-montserrat-bold text-[#FFB636]">Add New Ideas</span>
            </button>
        </div>
    )
}