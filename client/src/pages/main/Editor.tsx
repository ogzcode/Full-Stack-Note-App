import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from 'react';

import "../../assets/css/editor.css"

function TagList() {
    const [tagList, setTagList] = useState<string[]>([]);
    const [newTag, setNewTag] = useState<string>('');

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && newTag !== "") {
            e.preventDefault();
            setTagList([...tagList, newTag]);
            setNewTag("");
        }
    }

    const handleDeleteTag = (i: number) => {
        const copyTag = [...tagList];
        copyTag.splice(i, 1);
        setTagList([...copyTag]);
    }

    return (
        <div className='flex flex-wrap gap-2 mt-2'>
            {
                tagList.map((tag, i) => (
                    <div className="flex gap-2 bg-[#E3EAE46B] rounded-sm p-1 text-[#4E4E4E]">
                        <span className='text-xs'>{tag}</span>
                        <button type="button" onClick={() => handleDeleteTag(i)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                ))
            }
            <input className="outline-0 text-xs p-1" type="text" placeholder="Add" value={newTag} onChange={e => setNewTag(e.target.value)} onKeyDown={handleEnter} />
        </div>
    );
}


export default function Editor() {
    return (
        <div className='col-span-6 p-6 flex flex-col justify-between gap-12'>
            <div className='h-[60px]'>
                <input type="text" className="outline-0 px-2 pb-1 text-[#4E4E4E] border-b w-full" placeholder='Note header...' />
                <TagList />
            </div>
            <div className='h-[640px] border p-2 rounded overflow-hidden'>
                <ReactQuill theme="snow" className='h-full' placeholder='Enter your note...' />
            </div>
            <div className='h-[60px] flex justify-end items-center gap-4'>
                <button className='action__button font-montserrat-medium flex items-center justify-center gap-4 rounded text-white bg-[#FFB636] w-[120px] h-[40px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                    <span>Save</span>
                </button>
                <button className='action__button font-montserrat-medium flex items-center justify-center gap-4 rounded text-white bg-[#FF4E36] w-[120px] h-[40px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
}