import { Form, Button } from "react-bootstrap";
import { useAuth } from "../context/useAuth";
import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();


function AddForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { addNote } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        addNote(title, content);
        setTitle("");
        setContent("");
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form className="w-25">
                <h1 className="text-center mb-3">Add New Note</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Note Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter your note" rows={5} 
                        value={content} onChange={e => setContent(e.target.value)} required
                    />
                </Form.Group>
                <div className="text-center mt-4">
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AddForm;