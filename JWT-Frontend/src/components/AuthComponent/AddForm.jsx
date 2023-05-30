import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../context/useAuth";
import { useState, useEffect } from "react";

function AddForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const { addNote, errorMessage, setError } = useAuth();

    useEffect(() => {
        if (errorMessage) {
            setShow(true);
            let timer = setTimeout(() => {
                setShow(false);
                setError("");
            }, 1500);

            return () => clearInterval(timer);
        }
    }, [errorMessage]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && content) {
            addNote(title, content);

            setTitle("");
            setContent("");
        }

        setValidated(true);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {
                errorMessage && <Alert show={show} variant={"danger"} className="position-absolute top-0 start-50 translate-middle-x mt-4">
                    {errorMessage}
                </Alert>
            }
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