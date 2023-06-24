import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

import { useDispatch} from "react-redux";
import { addNoteThunk } from "../../redux/slice/noteSlice";

function AddForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title && content) {
            await dispatch(addNoteThunk({ title, content }));
            
            navigate("/home");
            setTitle("");
            setContent("");
        }

        setValidated(true);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form className="w-25" onSubmit={handleSubmit} noValidate validated={validated}>
                <h1 className="text-center mb-3">Add New Note</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Note Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} 
                    onChange={e => setTitle(e.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                        Please write your note title
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter your note" rows={5}
                        value={content} onChange={e => setContent(e.target.value)} required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please write your note content
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="text-center mt-4">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AddForm;