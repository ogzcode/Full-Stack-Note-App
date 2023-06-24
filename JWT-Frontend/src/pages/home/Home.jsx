import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import { getAllNoteThunk, deleteNoteThunk } from "../../redux/slice/noteSlice";

function Home() {
    const notes = useSelector(state => state.note.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        if (notes.length === 0) {
            dispatch(getAllNoteThunk());
        }
    }, []);

    const handleDelete = async (id) => {
        await dispatch(deleteNoteThunk(id));
    }

    return (
        <div className="p-5 d-flex gap-5 flex-wrap justify-content-center">
            {
                notes.length > 0 && notes.map((d, i) => (
                    <Card style={{ width: '18rem' }} key={i}>
                        <Card.Body>
                            <Card.Title>{d.title ? d.title : `Card note ${i + 1}`}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>{d.date ? d.date : "18.10.2023"}</Card.Subtitle>
                            <Card.Text >
                                {
                                    d.content ? d.content : "Some quick example text to build on the card title and make up the bulk of the card's content."
                                }
                            </Card.Text>
                            <Button variant="outline-danger" className="btn-sm" onClick={() => handleDelete(d.id)}><FaTrash /></Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
}

export default Home;